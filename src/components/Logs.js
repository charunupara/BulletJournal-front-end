import React from "react";

// Determine which type of log will be rendered
const checkTypeAndRender = (log) => {
  if (log.category === "task") {
    return <div>* {log.title}</div>
  } else if (log.category === "note") {
    return <div>- {log.title}</div>
  } else {
    return <div>o {log.title}</div>
  }
}


class Logs extends React.Component {

  render() {
    return (
      <div>
        <h1>Today's Log</h1>
        {this.props.logs.map((log) => (
          checkTypeAndRender(log)
        ))}
      </div>
    );
  }
}

export default Logs;
