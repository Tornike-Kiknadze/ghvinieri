import React, { Component } from "react";
import "./productpage.css";
import HomeButton from "../homebutton/homebutton";
import { FormattedMessage } from "react-intl";
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    const products = this.props.location.state;
    this.setState({ products });
  }

  render() {
    window.scrollTo(0, 0);
    const products = this.state.products;
    console.log(products);
    return (
      <div className="productpage">
        <div className="newspage-header">
          <div className="newspage-header-links">
            <HomeButton />
            <h3>Products</h3>
          </div>
        </div>

        <div class="productpage-wrapper">
          {products.map(item => (
            <div key={item.name} className="productpage-content">
              <img src={item.img} />
              <p>
                <FormattedMessage id={`${item.name}`} />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPage;
