import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import RestoreIcon from "@material-ui/icons/Restore";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../stylesheets/log.css';

// Determine which type of log will be rendered
// const checkTypeAndRender = (log) => {
//   if (log.category === "task") {
//     return <span>• {log.title} </span>;
//   } else if (log.category === "note") {
//     return <span>- {log.title} </span>;
//   } else if (log.category === "event") {
//     return <span>◦ {log.title} </span>;
//   } 
// };


class Log extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.checkTypeAndRender = this.checkTypeAndRender.bind(this);
    this.handleDeleteLog = this.handleDeleteLog.bind(this);
  }

  handleChange() {
    // call the handleRelevant function in the parent component to toggle isRelevant
    this.props.onRelevantChange(this.props.index);
  }

  handleDeleteLog() {
    this.props.onDelete(this.props.log)
  }

  checkTypeAndRender = (log) => {
    if (log.category === "task") {
      return (
        <div>
        <span onClick={this.handleChange}> • {log.title}  </span>
        <DeleteForeverIcon onClick={this.handleDeleteLog}></DeleteForeverIcon>
        </div>
      );
    } else if (log.category === "note") {
      return (
        <div>
        <span onClick={this.handleChange}> - {log.title}  </span>
        <DeleteForeverIcon onClick={this.handleDeleteLog}></DeleteForeverIcon>
        </div>
      );
    } else if (log.category === "event") {
      return (
        <div>
        <span onClick={this.handleChange}> ◦ {log.title}  </span>
        <DeleteForeverIcon onClick={this.handleDeleteLog}></DeleteForeverIcon>
        </div>
      );
    }
  }



  render() {
    return (
      <div>
        {this.props.log.isRelevant ? (
          <div id="relevant">
            {this.checkTypeAndRender(this.props.log)}
          
          </div>
        ) : (
          <div id="irrelevant"> 
            {this.checkTypeAndRender(this.props.log)}

          </div>
        )}
      </div>
    );
  }
}

export default Log;
