import React, { Component } from "react";

import "./App.css";
import Welcome from "./sections/welcome/welcome";
import About from "./sections/about/about";
import Products from "./sections/products/products";
import Nav from "./components/navigation/nav";
import Special from "./sections/special/special";
import News from "./sections/news/news";
import Footer from "./sections/footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollToElement: React.createRef()
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Welcome scrollToElement={this.state.scrollToElement} />
        <About referance={this.state.scrollToElement} />
        <Products />
        <Special />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
