import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import uuidv1 from "uuid/v1";
import Header from "../../components/sectionheader/header";

class Products extends Component {
  state = {
    wines: [
      { id: uuidv1(), name: "red", img: require("./assets/img/bottle.png") },
      { id: uuidv1(), name: "white", img: require("./assets/img/bottle1.png") },
      { id: uuidv1(), name: "green", img: require("./assets/img/bottle.png") },
      {
        id: uuidv1(),
        name: "champagne",
        img: require("./assets/img/bottle1.png")
      }
    ]
  };

  render() {
    const { wines } = this.state;
    return (
      <section className="products" ref={this.props.reference}>
        <Header header="Our Products" title="Popular This Month" />
        <div className="product-wrapper">
          {this.state.wines.map(wine => (
            <div key={wine.key} className="products-item">
              <img alt="" src={wine.img} />

              <p className="product-name">{wine.name}</p>
            </div>
          ))}
        </div>

        <Link
          to={{
            pathname: `productpage`,
            state: wines
          }}
        >
          <button className="product-button">
            <span>VIEW MORE</span>
          </button>
        </Link>
      </section>
    );
  }
}

export default Products;
