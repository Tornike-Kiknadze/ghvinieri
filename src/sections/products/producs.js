import React, { Component } from 'react';

import './products.css';

class Products extends Component {

    state = {
        wines: [


            { name: "ragaca", img: require("./assets/img/bottle.png") },
            { name: "sxva", img: require("./assets/img/bottle1.png") },

            { name: "ragaca", img: require("./assets/img/bottle.png") },
            { name: "sxva", img: require("./assets/img/bottle1.png") }



        ]
    }



    render() {
        return (
            <section className="products">
                <p className='products-header'>Our Products</p>
                <p className='products-title'>Popular This Month</p>
                <div className='products-image'><img src={require('./assets/img/glasses.png')}></img></div>

                <div className='product-wrapper'>
                    {this.state.wines.map(wine => (
                        <div className="products-item">
                            <img src={wine.img}></img>

                            <p className="product-name">
                                {wine.name}
                            </p></div>))}

                </div>
            </section>
        );
    }
}

export default Products;
