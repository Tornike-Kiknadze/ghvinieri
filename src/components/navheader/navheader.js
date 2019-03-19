import React, { Component } from "react";

import "./navheader.css";

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      lang: ""
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
      const nav = this.refs.navi;
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

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return null;
    } else {
      return (
        <div className="navHeader" ref="navi">
          <i class="fa fa-phone" />
          <div className="navHeader-number">+995 598 70 70 58</div>
        </div>
      );
    }
  }
}

export default NavHeader;
