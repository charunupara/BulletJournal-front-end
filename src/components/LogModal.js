import React from 'react';
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

import Button from "@material-ui/core/Button";

class LogModal extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: true,
      category: "task"
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleOpen() {
    this.setState({ isOpen: true });
    this.props.onOpen();
  }

  handleClose() {
    this.setState({ isOpen: false });
    this.props.onClose();
  }

  //this.setState({test: true})
  handleChange(event) {
    this.setState({category: event.target.value});
  
  }
  
  


  render() {
    return (
      <Dialog
          open={this.state.isOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              fullWidth
              defaultValue={this.props.logTitle || ""}
            />
            <FormControl component="fieldset">
            
              <RadioGroup
                aria-label="category"
                name="category"
                defaultValue={this.props.logCategory || this.state.category}
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
            <Button onClick={this.props.onSubmit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
  
}

export default LogModal;