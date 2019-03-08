import React, { Component } from "react";
import "./option.css";

class Option extends Component {
    state = {
        lang: '',
        width: window.innerWidth
    }

    componentDidMount() {
        this.setState({ lang: this.props.language })

        const select = this.select;
        window.addEventListener("scroll", function () {
            let offset = window.pageYOffset;

            if (offset >= 115) {
                select.style.opacity = "0";
            } else {
                select.style.opacity = "1";
            }
        });

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
