import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
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
    if (this.state.width >= 500) {
      const nav = this.refs.nav;
      window.addEventListener("scroll", function() {
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
    let scrollto = this.props[section].current.offsetTop;
    window.scrollTo({
      top: scrollto,
      behavior: "smooth"
    });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return null;
    } else {
      return (
        <div className="nav" ref="nav">
          <ul>
            <li onClick={e => this.handleClick(e)}>
              <Link to="/">about</Link>
            </li>
            <li onClick={e => this.handleClick(e)}>products</li>
            <li onClick={e => this.handleClick(e)}>offers</li>
            <li onClick={e => this.handleClick(e)}>news</li>
            <li>
              {" "}
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Nav;
