import React, { Component } from 'react';

import './about.css';

class About extends Component {
    render() {
        return (
            <section className="about">
                <div className="about-left">
                    <img src={require("./assets/img/left.png")}></img>
                </div>
                <div className="about-right">
                    <p className='about-text'>About Ghvinieri</p>
                    <h2>Welcome To Ghvinieri</h2>
                    <p className='about-paragraph'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <p className='gray'>Address:</p>
                    <p className='about-paragraph'>40 Baria Sreet 133/2, NY, US</p>
                    <p className='gray'>Telephone:</p>
                    <p className='about-paragraph'>1-677-124-44227
</p>
                    <p className='gray'>We're Open</p>
                    <p className='about-paragraph'>Mon-Sun: 9.00 - 20.00
</p>
                </div>

            </section>
        );
    }
}

export default About;
