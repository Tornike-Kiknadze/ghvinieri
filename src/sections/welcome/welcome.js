import React, { Component } from 'react';

import './welcome.css';

class Welcome extends Component {
    render() {
        return (
            <section className="welcome">
                <p className='welcome-text'>Welcome to Ghvinieri</p>
                <h1>Best Of Wine Store</h1>
                <p className='welcome-paragraph'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

            </section>
        );
    }
}

export default Welcome;
