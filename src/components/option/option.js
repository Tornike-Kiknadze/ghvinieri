import React, { Component } from "react";
import "./option.css";

class Option extends Component {
    state = {
        lang: '',
        width: window.innerWidth
    }

    componentDidMount() {
        this.setState({ lang: this.props.language })
        /* 
                const select = this.select;
                window.addEventListener("scroll", function () {
                    let offset = window.pageYOffset;
        
                    if (offset >= 135) {
                        select.style.transform = "translateY(80px)";
                    } else {
                        select.style.transform = "translateY(0px)";
                    }
                }); */

    }

    render() {

        let { lang } = this.props;
        return (

            <select ref={select => (this.select = select)} className='option' onChange={e => lang(e)}
                value={this.state.lang}>
                <option value='en'>EN</option>
                <option value='ka'>KA</option>

            </select>

        );
    }
}

export default Option;
