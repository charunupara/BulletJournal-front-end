import React from 'react';
import Logs from './components/Logs';


class App extends React.Component {

  state = {
    logs: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/')
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
