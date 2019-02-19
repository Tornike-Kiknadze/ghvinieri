import React, { Component } from 'react';

import './App.css';
import Welcome from './sections/welcome/welcome';
import About from './sections/about/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <About />
      </div>
    );
  }
}

export default App;
