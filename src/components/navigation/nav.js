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

 handleClick=(e)=>{
    let section=(e.target.innerHTML);
     let rame =this.props[section].current.offsetTop;
     console.log(rame);
 
  var obj ={}
    window.scrollTo({
        top: rame,
        behavior: "smooth"
      });
       
 }


    render() {
   
     
        return (



            <div className='nav' ref='nav'>
                <ul>


                    <li onClick={(e)=>this.handleClick(e)}>about</li>
                    <li onClick={(e)=>this.handleClick(e)}>products</li>
                    <li onClick={(e)=>this.handleClick(e)}>offers</li>
                    <li onClick={(e)=>this.handleClick(e)}>news</li>

                </ul>

            </div>

        );
    }
}

export default Nav;
