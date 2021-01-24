import React from "react";

class Task extends React.Component {
  // need a button for marking as done/not done, migration, and delete

  constructor(props) {
    super(props);
    this.state = {
      status: "default",
    };
    this.handleComplete = this.handleComplete.bind(this);
    this.handleIncomplete = this.handleIncomplete.bind(this);
    this.handleIrrelevant = this.handleIrrelevant.bind(this);
  }

  handleComplete() {
    this.setState({ status: "complete" });
  }

  handleIncomplete() {
    this.setState({ status: "incomplete"});
  }

  handleIrrelevant() {
    this.setState({ status: "irrelevant"});
  }

  render() {
    return <p>• {this.props.log.title}</p>;
  }
}

export default Task;
