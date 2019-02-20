import React, { Component } from 'react';
import './special.css';
import Header from '../../components/sectionheader/header';

class Special extends Component {

 



    render() {


        return (



            <section className='special'>
    
                <Header header='Our Products' title='Deal Of The Week'/>
                <div className="special-content">
                <div className="special-left">
                <img alt='' src={require("./assets/img/special.png")}></img>
                </div>
                <div className="special-right">
                <h2>Special wine</h2>
                <p className='special-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
                </p>
                <h3>$11.5</h3>
                </div></div>
            </section>

        );
    }
}

export default Special;
