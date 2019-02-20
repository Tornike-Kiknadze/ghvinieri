import React, { Component } from 'react';


import './welcome.css';

class Welcome extends Component {

    componentDidMount() {
        const parallax = this.refs.parallax;
        window.addEventListener("scroll", function () {
            let offset = window.pageYOffset;
            parallax.style.backgroundPositionY = offset * .55 + 'px';

            console.log(offset);

        })

          
    }



    render() {


        return (



            <section className='welcome' ref='parallax'>

                <p className='welcome-text'>Welcome to Ghvinieri</p>
                <h1>Best Of Wine Store</h1>
                <p className='welcome-paragraph'>Lorem ipsum is placeholder text commonly
                 used in the graphic, print, and publishing industries for previewing
                  layouts and visual mockups.</p>

                 <button className='button' ref='hello'><a href="#about">read more</a></button>
            </section>

        );
    }
}

export default Welcome;
