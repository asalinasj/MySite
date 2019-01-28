import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Intro/>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Footer />
          {/* <Route exact path="/" component={Intro} /> */}
          {/* <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
