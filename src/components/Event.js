import React from "react";

class Event extends React.Component {
  render() {
    return <p>o {this.props.log.title}</p>;
  }
}

export default Event;
