import React from "react";
import Log from "./Log";
import DateComponent from "./DateComponent";
import CreateLog from "./CreateLog";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

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
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      this.setState({ logs: data });
    } catch (err) {
      console.log(err);
    }
  };

  // update state after PATCH request has been processed to ensure that this.state.logs is synchronised with database
  // we don't update state directly, we update database then update state by fetching data
  // TODO FIX
  handleIrrevant(index) {
    const curRelevant = this.state.logs[index].isRelevant;
    const id = this.state.logs[index]._id;

    let requestBody = {};

    curRelevant
      ? (requestBody.isRelevant = false)
      : (requestBody.isRelevant = true);

    const updateRelevant = async () => {
      try {
        const updatedLog = await fetch(
          "http://localhost:8000/logs/" + id + "/isRelevant",
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
          }
        );
        const newLog = await updatedLog.json();
        console.log(newLog);
        this.getData();
      } catch (err) {
        console.log(err);
      }
    };

    updateRelevant();
  }

  handleCreate(body) {
    const createLog = async () => {
      try {
        const res = await fetch("http://localhost:8000/logs/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        });
        const newLog = await res.json();
        console.log(newLog);
        this.getData();
      } catch (err) {
        console.log(err);
      }
    };

    createLog();
  }

  handleDelete(log) {
    const id = log._id;

    const deleteLog = async () => {
      try {
        await fetch("http://localhost:8000/logs/" + id, {
          method: "DELETE",
        });
        this.getData();
      } catch (err) {
        console.log(err);
      }
    };

    deleteLog();
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
            onDelete={this.handleDelete}
          />
        ))}

        <ThemeProvider theme={theme}>
          <CreateLog handleCreate={this.handleCreate} />
        </ThemeProvider>
      </div>
    );
  }
}

export default LogBoard;
