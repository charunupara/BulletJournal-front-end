import React from 'react';
import Logs from './components/Logs';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/logs')
    .then(res => res.json())
    .then(data => {
      this.setState({ logs: data});
    })
    .catch(console.log);
  }

  render() {
    return (
      <Logs logs={this.state.logs}/>
    )
  }
}

export default App;
