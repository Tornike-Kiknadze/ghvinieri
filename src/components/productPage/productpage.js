import React, { Component } from "react";
import "./productpage.css";
import HomeButton from "../homebutton/homebutton";
import Header from "../sectionheader/header";



class ProductPage extends Component {
    /*   constructor(props) {
          super(props);
          this.state = {
              news: [],
              currentItem: {}
          };
      }
      componentWillMount() {
          const news = this.props.location.state;
          const id = this.props.match.params.id;
          const currentItem = news.find(item => item.id === id);
          this.setState({ news, currentItem });
      } */



    render() {


        console.log(this.props)
        return (
            <div className="newspage">
                <div className="newspage-header">
                    <div className="newspage-header-links">
                        <HomeButton />

                        <h3>Products</h3>
                    </div>
                </div>
                <div class="product-content">

                </div>
            </div>
        );
    }
}

export default ProductPage;
