import React, { Component } from "react";

import "./App.css";
import Welcome from "./sections/welcome/welcome";
import About from "./sections/about/about";
import Products from "./sections/products/products";
import Nav from "./components/navigation/nav";
import Special from "./sections/special/special";
import News from "./sections/news/news";
import Upbutton from "./components/upbutton/upbutton";
import Footer from "./components/footer/footer";
import BurgerMenu from "./components/burger-menu/burger";
import BurgerIcon from "./components/burger-menu/burgericon/icon";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: React.createRef(),
      products: React.createRef(),
      special: React.createRef(),
      news: React.createRef(),
      isOpen: false
    };
  }
  handleClick = () => {
    const isOpen = this.state.isOpen;
    this.setState({ isOpen: !isOpen });
  };
  handleOpen = () => {
    const isOpen = this.state.isOpen;
    this.setState({ isOpen: !isOpen });
    console.log(this.state.isOpen);
  };

  render() {
    const { about, products, special, news } = this.state;

    return (
      <div className="App">
        <BurgerIcon handleClick={this.handleOpen} />
        <BurgerMenu
          isOpen={this.state.isOpen}
          products={products}
          about={about}
          offers={special}
          news={news}
          isOpen={this.state.isOpen}
          onclick={this.handleClick}
        />
        <Upbutton
          products={products}
          about={about}
          offers={special}
          news={news}
        />
        <Nav products={products} about={about} offers={special} news={news} />
        <Welcome scrollToElement={about} />
        <About referance={about} />
        <Products reference={products} />
        <Special reference={special} />
        <News reference={news} />
        <Footer />
      </div>
    );
  }
}

export default App;
