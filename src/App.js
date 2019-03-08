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

  handleOpenState = () => {
    const isOpen = this.state.isOpen;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { about, products, special, news } = this.state;
    const { language, handleLanguage } = this.props;
    return (
      <div className="App">
        <BurgerIcon onklik={this.handleOpenState} />
        <BurgerMenu
          isOpen={this.state.isOpen}
          products={products}
          about={about}
          offers={special}
          news={news}
          isOpen={this.state.isOpen}
          onklik={this.handleOpenState}
        />
        <Upbutton
          products={products}
          about={about}
          offers={special}
          news={news}
        />
        <Nav
          products={products}
          about={about}
          offers={special}
          news={news}
          language={language}
          handleLanguage={handleLanguage}
        />
        <Welcome scrollToElement={about} language={language} />
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
