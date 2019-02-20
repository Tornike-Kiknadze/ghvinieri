import React, { Component } from 'react';

import './App.css';
import Welcome from './sections/welcome/welcome';
import About from './sections/about/about';
import Products from './sections/products/products';
import Nav from './components/navigation/nav';
import Special from './sections/special/special';
import News from './sections/news/news';
import Footer from './sections/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Welcome />
        <About />
        <Products />
        <Special/>
        <News/>
      <Footer/>
      </div>
    );
  }
}

export default App;
