import React, { Component } from "react";
import "./footer.css";

import Facebook from "../../assets/svg/facebook";
import Instagram from "../../assets/svg/instagram";
import wine from "../../assets/svg/wine.png";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        {/* <img src={require('./assets/img/wine.png')}></img> */}
        {/* <Wine fill={'#a10215'} width={80} height={80} /> */}
        <img src={wine} width={170} />
        <div className="footer-contact">
          <a target="_blank" href="https://www.facebook.com/ghvinieri/">
            <Facebook fill={"#666666"} width={19} height={19} />
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/ghvinieri_wines/?fbclid=IwAR0aKFVtxfIzAp797EHcwuoGTPAmTxN60OJwOdzIXQ0LBUkeHrAR19yJkl0"
          >
            {" "}
            <Instagram fill={"#666666"} width={19} height={19} />
          </a>
        </div>
      </section>
    );
  }
}

export default Footer;
