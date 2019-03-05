import React from "react";
import "./burger.css";
import { Link } from "react-router-dom";
import Close from "../../assets/svg/close";

class BurgerMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      openClass: "transform"
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

  componentDidUpdate(prev) {
    if (prev !== this.props.isOpen) {
      this.menu.classList.toggle("transform");
    }
  }

  handleClick = e => {
    let section = e.target.innerHTML;
    let scrollto = this.props[section].current.offsetTop;
    window.scrollTo({
      top: scrollto,
      behavior: "smooth"
    });
    this.props.onclick();
    console.log("klikkeeeed");
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div className="menu" ref={e => (this.menu = e)}>
          <Close
            className="menu__closebutton"
            width={25}
            height={25}
            fill="#c02323"
            onClick={this.props.onclick}
          />
          <ul>
            <li onClick={e => this.handleClick(e)}>about</li>
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
    } else {
      return null;
    }
  }
}

export default BurgerMenu;
