import React from "react";

// Determine which type of log will be rendered
const checkTypeAndRender = (log) => {
  if (log.category === "task") {
    return <div>* {log.title}</div>;
  } else if (log.category === "note") {
    return <div>- {log.title}</div>;
  } else {
    return <div>o {log.title}</div>;
  }
};

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    // call the handleRelevant function in the parent component to toggle isRelevant
    this.props.onRelevantChange(this.props.index);
  }

  render() {
    return (
      <div>
        {checkTypeAndRender(this.props.log)}
        {console.log(this.props.index)}
        {this.props.log.isRelevant ? (
          <button onClick={this.handleChange}>Mark as irrelevant</button>
        ) : (
          <button onClick={this.handleChange}>Mark as relevant</button>
        )}
      </div>
    );
  }
}

export default Log;
