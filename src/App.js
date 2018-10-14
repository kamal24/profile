import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './Component/MainComponent';
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <MainComponent />
        </div>
      </Router>
      
    );
  }
}

export default App;
