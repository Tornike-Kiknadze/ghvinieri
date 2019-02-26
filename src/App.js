import React, { Component } from "react";
import { Link, Route, Router } from 'react-router-dom';
import "./App.css";
import Welcome from "./sections/welcome/welcome";
import About from "./sections/about/about";
import Products from "./sections/products/products";
import Nav from "./components/navigation/nav";
import Special from "./sections/special/special";
import News from "./sections/news/news";
 
import Upbutton from "./components/upbutton/upbutton";
import Footer from "./components/footer/footer";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: React.createRef(),
      products: React.createRef(),
      special: React.createRef(),
      news: React.createRef()


    }

  }

  render() {
    const { about, products, special, news } = this.state;


    return (

      <div className="App">

        <Upbutton />
        <Nav products={products} about={about} offers={special} news={news} />
        <Welcome scrollToElement={about} />
        <About referance={about} />
        <Products reference={products} />
        <Special reference={special} />
        <News reference={news} />
<Footer/>
      </div>
    );
  }
}

export default App;
