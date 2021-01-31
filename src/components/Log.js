import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import '../stylesheets/log.css';
import LogModal from './LogModal';
import {getSelectedCategory} from "../util/utils";



class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.checkTypeAndRender = this.checkTypeAndRender.bind(this);
    this.handleDeleteLog = this.handleDeleteLog.bind(this);
    this.handleEditLog = this.handleEditLog.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }

  handleModalOpen() {
    this.setState({modalOpen: true})
  }

  handleModalClose() {
    this.setState({modalOpen: false})
  }

  handleChange() {
    // call the handleRelevant function in the parent component to toggle isRelevant
    this.props.onRelevantChange(this.props.index);
  }

  handleDeleteLog() {
    this.props.onDelete(this.props.log);
  }

  handleEditLog() {
    this.handleModalOpen()
  }

  handleSubmit() {
    let {title, category} = getSelectedCategory()
  
    const body = JSON.stringify({title, category});

    this.props.onEdit(this.props.index, body);

    this.handleModalClose();
  }

  checkTypeAndRender = (log) => {
    if (log.category === "task") {
      return (
        <div>
        <span onClick={this.handleChange}> • {log.title}  </span>
        <DeleteForeverIcon onClick={this.handleDeleteLog}></DeleteForeverIcon>
        <EditIcon onClick={this.handleEditLog}></EditIcon>
        </div>
      );
    } else if (log.category === "note") {
      return (
        <div>
        <span onClick={this.handleChange}> - {log.title}  </span>
        <DeleteForeverIcon onClick={this.handleDeleteLog}></DeleteForeverIcon>
        <EditIcon onClick={this.handleEditLog}></EditIcon>
        </div>
      );
    } else if (log.category === "event") {
      return (
        <div>
        <span onClick={this.handleChange}> ◦ {log.title}  </span>
        <DeleteForeverIcon onClick={this.handleDeleteLog}></DeleteForeverIcon>
        <EditIcon onClick={this.handleEditLog}></EditIcon>
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
        {this.state.modalOpen ? <LogModal title="Edit Log" onSubmit={this.handleSubmit} onOpen={this.handleModalOpen} onClose={this.handleModalClose} logTitle={this.props.log.title} logCategory={this.props.log.category}/> : <div></div>}
        
      </div>
    );
  }
}

export default Log;
