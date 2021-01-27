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
  }

  // Important to understand! States should be treated as immutable, so what we
  // do here is create a copy of the state, make changes where we want to, and set the state to be the modified copy
  handleIrrevant(index) {
    let newLog = JSON.parse(JSON.stringify(this.state.logs));

    if (newLog[index].isRelevant === true) {
      newLog[index].isRelevant = false;
    } else {
      newLog[index].isRelevant = true;
    }

    this.setState({ logs: newLog });
  }

  // Talks to backend and fetches data after initial mount
  componentDidMount() {
    fetch("http://localhost:8000/logs")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ logs: data });
      })
      .catch(console.log);
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
