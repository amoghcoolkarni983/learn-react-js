import React, { Component } from 'react';
import './App.css';
import Greet from './componants/Greet'
import Welcome from './componants/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name = "Amogh" avenger = "Ironman" />
        <Greet name = "Cool" avenger = "Captain America" />

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Welcome name = "Class Componant Name" avenger = "and Its avenger" />
   
      </div>
    );
  }
}

export default App;
