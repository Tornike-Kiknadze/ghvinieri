import React, { Component } from "react";
import "./productpage.css";
import HomeButton from "../homebutton/homebutton";




class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],

        };
    }
    componentWillMount() {
        const products = this.props.location.state;
        this.setState({ products });
    }



    render() {

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

                {products.map(item =>
                    <div key={item.name} className="product-content">
                        <img src={item.img}></img>
                        <p>{item.name}</p>

                    </div>)}

            </div>
        );
    }
}

export default ProductPage;
