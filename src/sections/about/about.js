import React, { Component } from 'react';

import './about.css';

class About extends Component {
    render() {
        return (
            <section className="about">
                <div className="about-left">
                    <img src={require("../../Assets/img/left.png")}></img>
                </div>
                <div className="about-right">
                    <p className='about-text'>About Ghvinieri</p>
                    <h2>Welcome To Ghvinieri</h2>
                    <p className='about-paragraph'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>

            </section>
        );
    }
}

export default About;
