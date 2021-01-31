import React from "react";
import LogBoard from "./LogBoard";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { withTheme } from "@material-ui/core/styles";
import LogModal from './LogModal';
import {getSelectedCategory} from "../util/utils";



class CreateLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.handleCreateLog = this.handleCreateLog.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }



  handleCreateLog() {
    let {title, category} = getSelectedCategory()
    const body = JSON.stringify({title, category});

    this.props.handleCreate(body);

    this.handleModalClose();

  }

  handleModalOpen() {
    this.setState({modalOpen: true})
  }

  handleModalClose() {
    this.setState({modalOpen: false})
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={this.handleModalOpen}>
          Create Log
        </Button>

        {this.state.modalOpen ? <LogModal title="Create New Log" onSubmit={this.handleCreateLog} onOpen={this.handleModalOpen} onClose={this.handleModalClose}/> : <div></div>}
        
      </div>
    );
  }
}

export default CreateLog;
