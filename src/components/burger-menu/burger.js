import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class BurgerMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      isOpen: false
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
    var styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        left: "20px",
        top: "20px"
      },
      bmBurgerBars: {
        background: "#fff"
      },
      bmBurgerBarsHover: {
        background: "#a90000"
      },
      bmCrossButton: {
        height: "24px",
        width: "24px"
      },
      bmCross: {
        background: "#bdc3c7"
      },
      bmMenuWrap: {
        position: "fixed",
        height: "100%"
      },
      bmMenu: {
        background: "#232526", //slide background
        overflow: "hidden",
        fontSize: "1.15em",
        outline: "none"
      },
      bmMorphShape: {
        fill: "#373a47"
      },
      bmItemList: {
        display: "flex",
        flexDirection: "column",

        justifyContent: "center"
      },
      bmItem: {
        display: "inline-block",
        width: "100%",
        marginTop: "20px",
        textDecoration: "none",
        textTransform: "uppercase",
        color: "white"
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)"
      }
    };

    if (isMobile) {
      return (
        <Menu isOpen={this.state.isOpen} styles={styles}>
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
        </Menu>
      );
    } else {
      return null;
    }
  }
}

export default BurgerMenu;
