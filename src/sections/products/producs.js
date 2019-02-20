import React, { Component } from 'react';

import './products.css';
import Header from '../../components/sectionheader/header';

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
                <Header header='Our Products' title='Popular This Month'/>
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
