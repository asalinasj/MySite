import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro/>
        <About />
      </div>
    );
  }
}

export default App;
