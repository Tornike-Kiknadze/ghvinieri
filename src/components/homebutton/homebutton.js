import React, { Component } from "react";
import "./homebutton.css";
import { Link } from "react-router-dom";
import Arrow from "../../assets/svg/arrow";
class HomeButton extends Component {


    render() {


        console.log(this.props);
        return (

            <div class="homebutton-header-links"><Link to="/">
                {" "}
                <Arrow width={50} height={20} />
                Home
            </Link></div>

        );
    }
}

export default HomeButton;
