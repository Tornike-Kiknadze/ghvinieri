import React, { Component } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import "./welcome.css";

class Welcome extends Component {
  componentDidMount() {
    const parallax = this.refs.parallax;
    window.addEventListener("scroll", function() {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.55 + "px";
    });
  }

  scrollToRef = () => {
    window.scrollTo({
      top: this.props.scrollToElement.current.offsetTop,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <section className="welcome" ref="parallax">
        <p className="welcome-text">
          <FormattedMessage
            id="welcome"
            defaultMessage="Welcome to Ghvinieri"
          />
        </p>
        <h1>
          <FormattedMessage
            id="BestWineStore"
            defaultMessage="Welcome to Ghvinieri"
          />
        </h1>
        <p className="welcome-paragraph">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <button className="button" onClick={this.scrollToRef}>
          <p>read more</p>
        </button>
      </section>
    );
  }
}

export default Welcome;
