import React from "react";
import Task from "./Task";
import Note from "./Note";
import Event from "./Event";


// Determine which type of log will be rendered
const checkType = (log) => {
  if (log.category === "task") {
    return <Task log={log} />
  } else if (log.category === "note") {
    return <Note log={log} />
  } else {
    return <Event log={log} />
  }
}


class Logs extends React.Component {

  render() {
    return (
      <div>
        <h1>Today's Log</h1>
        {this.props.logs.map((log) => (
          checkType(log)
        ))}
      </div>
    );
  }
}

export default Logs;
