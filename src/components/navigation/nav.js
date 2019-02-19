import React, { Component } from 'react';


import './nav.css';

class Nav extends Component {

    componentDidMount() {


        const nav = this.refs.nav;
        window.addEventListener("scroll", function () {
            let offset = window.pageYOffset;

            if (offset >= 135) {
                nav.style.transform = 'translateY(-80px)';



            } else { nav.style.transform = 'translateY(0px)' };




        })


    }




    render() {


        return (



            <div className='nav' ref='nav'>
                <ul>


                    <li>home</li>
                    <li>products</li>
                    <li>blog</li>
                    <li>contact</li>

                </ul>

            </div>

        );
    }
}

export default Nav;
