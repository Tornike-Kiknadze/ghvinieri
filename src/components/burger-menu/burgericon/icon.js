import React from "react";
import Burger from "../../../assets/svg/burger";
import "./icon.css";
import { isContext } from "vm";

class BurgerIcon extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div className="icon" onClick={this.props.handleClick}>
          <Burger width={35} height={35} fill="#C02323" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BurgerIcon;
