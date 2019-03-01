import React, { Component } from "react";
import "./homebutton.css";
import { Link } from "react-router-dom";
import Arrow from "../../assets/svg/arrow";
class HomeButton extends Component {


    render() {


        return (

            <div className="homebutton-header-links"><Link to="/">
                {" "}
                <Arrow width={50} height={20} />
                Home
            </Link></div>

        );
    }
}

export default HomeButton;
