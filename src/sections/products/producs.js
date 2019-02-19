import React, { Component } from 'react';

import './products.css';

class Products extends Component {
    render() {
        return (
            <section className="products">
                <p className='products-header'>Our Products</p>
                <p className='products-title'>Popular This Month</p>
                <div className='products-image'><img src={require('./assets/img/glasses.png')}></img></div>
            </section>
        );
    }
}

export default Products;
