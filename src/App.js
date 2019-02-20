import React, { Component } from 'react';

import './App.css';
import Welcome from './sections/welcome/welcome';
import About from './sections/about/about';
import Products from './sections/products/producs';
import Nav from './components/navigation/nav';
import Special from './sections/special/special';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Welcome />
        <About />
        <Products />
        <Special/>
      </div>
    );
  }
}

export default App;
