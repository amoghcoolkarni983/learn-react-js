import React, { Component } from 'react';
import './App.css';
import Greet from './componants/Greet'
import Welcome from './componants/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet/>
        <Welcome/>
      </div>
    );
  }
}

export default App;
