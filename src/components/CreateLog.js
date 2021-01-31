import React from "react";
import LogBoard from "./LogBoard";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { withTheme } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { PostAdd } from "@material-ui/icons";

class CreateLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      category: "task"
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateLog = this.handleCreateLog.bind(this);
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  //this.setState({test: true})
  handleChange(event) {
    this.setState({category: event.target.value});
  
  }

  handleCreateLog() {
    const title = document.getElementById("title").value;
    const category = this.state.category;

    const body = JSON.stringify({title, category});

    this.props.handleCreate(body);

    this.handleClose();

  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={this.handleOpen}
        >
          Create Log
        </Button>
        <Dialog
          open={this.state.isOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create New Log</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              fullWidth
            />
            <FormControl component="fieldset">
            
              <RadioGroup
                aria-label="category"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                id="category-radio"
              >
                <FormControlLabel
                  value="task"
                  control={<Radio />}
                  label="Task"
                />
                <FormControlLabel
                  value="note"
                  control={<Radio />}
                  label="Note"
                />
                <FormControlLabel
                  value="event"
                  control={<Radio />}
                  label="Event"
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCreateLog} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreateLog;
