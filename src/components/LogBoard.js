import React from "react";
import Log from "./Log";
import DateComponent from "./DateComponent";

let today = new Date();
let cur_date =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

class LogBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
    };
    this.handleIrrevant = this.handleIrrevant.bind(this);
    this.getData = this.getData.bind(this);
  }

  // Talks to backend and fetches data after initial mount
  componentDidMount() {
    this.getData();
  }

  // fetches data from database using my API
  getData = async () => {
    try {
      const res = await fetch("http://localhost:8000/logs");
      const data = await res.json();
      this.setState({ logs:  data});
    } catch (err) {
      console.log(err);
    }
  }

  // update state after PATCH request has been processed to ensure that this.state.logs is synchronised with database
  // we don't update state directly, we update database then update state by fetching data
  handleIrrevant(index) {
    const curRelevant = this.state.logs[index].isRelevant;
    const id = this.state.logs[index]._id;

    let requestBody = {};

    curRelevant
      ? (requestBody.isRelevant = false)
      : (requestBody.isRelevant = true);

    const updateRelevant = async () => {
      try {
        const updatedLog = await fetch("http://localhost:8000/logs/" + id, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
        const newLog = await updatedLog.json();
        console.log(newLog);
        this.getData();
      } catch (err) {
        console.log(err)
      }
    }

    updateRelevant();
  }

  render() {
    return (
      <div>
        <DateComponent date={cur_date} />
        {this.state.logs.map((log, index) => (
          <Log
            log={log}
            index={index}
            key={log._id}
            onRelevantChange={this.handleIrrevant}
          />
        ))}
      </div>
    );
  }
}

export default LogBoard;
