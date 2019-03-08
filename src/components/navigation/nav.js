import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      lang: ''
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  showSettings(event) {
    event.preventDefault();
  }



  componentDidMount() {

    const { language } = this.props;
    const ka = "ka-nav";
    if (language === "ka") {
      this.setState({ lang: ka });
    }
    if (this.state.width >= 500) {
      const nav = this.refs.nav;
      window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;

        if (offset >= 135) {
          nav.style.transform = "translateY(-80px)";
        } else {
          nav.style.transform = "translateY(0px)";
        }
      });
    }
  }

  handleClick = e => {
    let section = e.target.innerHTML;
    switch (section) {
      case 'ჩვენ შესახებ':
        section = "about";
        break;
      case 'პროდუქცია':
        section = "products";
        break;

    }

    let scrollto = this.props[section].current.offsetTop;
    window.scrollTo({
      top: scrollto,
      behavior: "smooth"
    });

  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const lang = this.state.lang

    if (isMobile) {
      return null;
    } else {
      return (
        <div className="nav" ref="nav">
          <ul>
            <li onClick={e => this.handleClick(e)}>
              <FormattedMessage id="about">
                {txt => <div className={`${lang}`}>{txt}</div>}
              </FormattedMessage></li>
            <li onClick={e => this.handleClick(e)}> <FormattedMessage id="products">
              {txt => <div className={`${lang}`}>{txt}</div>}
            </FormattedMessage></li>
            <li onClick={e => this.handleClick(e)}> <FormattedMessage id="offers">
              {txt => <div className={`${lang}`}>{txt}</div>}
            </FormattedMessage></li>
            <li onClick={e => this.handleClick(e)}> <FormattedMessage id="news">
              {txt => <div className={`${lang}`}>{txt}</div>}
            </FormattedMessage></li>
            <li>
              <Link to="/contact"><FormattedMessage id="contact">
                {txt => <div className={`${lang}`}>{txt}</div>}
              </FormattedMessage></Link>
            </li>
          </ul>

        </div>
      );
    }
  }
}

export default Nav;
