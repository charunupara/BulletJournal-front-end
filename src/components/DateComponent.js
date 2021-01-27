import React from 'react';

class DateComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.date}</h1>
      </div>
    );
  }
}

export default DateComponent;