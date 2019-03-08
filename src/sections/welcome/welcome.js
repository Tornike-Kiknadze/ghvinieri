import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./welcome.css";

class Welcome extends Component {
  state = {
    lang: ""
  };

  componentDidMount() {
    const { language } = this.props;
    const ka = "ka";
    if (language === "ka") {
      this.setState({ lang: ka });
    }
    const parallax = this.refs.parallax;
    window.addEventListener("scroll", function () {
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
    const lang = this.state.lang;

    return (
      <section className="welcome" ref="parallax">
        <div className="welcome-text">
          <FormattedMessage id="welcome">
            {txt => <div className={lang}>{txt}</div>}
          </FormattedMessage>
        </div>
        <h1>
          <FormattedMessage id="BestWineStore">
            {txt => <div className={`${lang}--big`}>{txt}</div>}
          </FormattedMessage>
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
