import React from "react";

class Note extends React.Component {
  render() {
    return <p>- {this.props.log.title}</p>;
  }
}

export default Note;
