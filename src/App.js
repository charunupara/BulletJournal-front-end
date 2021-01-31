import React from 'react';
import LogBoard from './components/LogBoard';



class App extends React.Component {

  // today's log should become it's own component with a date
  render() {
    return (
      
      <div>
      <LogBoard />
      </div>
    )
  }
}

export default App;
