import React, { Component } from 'react';

import './App.css';
import Welcome from './sections/welcome/welcome';
import About from './sections/about/about';
import Products from './sections/products/producs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <About />
        <Products />
      </div>
    );
  }
}

export default App;
