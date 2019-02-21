import React, { Component } from 'react';

import './products.css';
import Header from '../../components/sectionheader/header';

class Products extends Component {

    state = {
        wines: [


            {key:'1', name: "ragaca", img: require("./assets/img/bottle.png") },
            {key:'2', name: "sxva", img: require("./assets/img/bottle1.png") },

            {key:'3', name: "ragaca", img: require("./assets/img/bottle.png") },
            {key:'4', name: "sxva", img: require("./assets/img/bottle1.png") }



        ]
    }



    render() {
         
        return (
            <section className="products" ref={this.props.reference}>
                <Header header='Our Products' title='Popular This Month'/>
                <div className='product-wrapper'>
                    {this.state.wines.map(wine => (
                        <div  key={wine.key}  className="products-item">
                            <img alt='' src={wine.img}></img>

                            <p className="product-name">
                                {wine.name}
                            </p></div>))}

                </div>
            </section>
        );
    }
}

export default Products;
