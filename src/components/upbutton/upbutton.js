import React, { Component } from "react";

import "./upbutton.css";


class Upbutton extends Component {



  componentDidMount() {

    const button = this.refs.button;
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;

      if (offset >= 735) {
        button.style.opacity = '1';

      } else { button.style.opacity = '0' };
    })
  }




  handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }




  render() {





    return (
      <div style={{ opacity: 0 }} onClick={this.handleUp} ref='button' className='upbutton'><img alt='up' src={require('./assets/up.png')}></img></div>
    );
  }
}

export default Upbutton;
