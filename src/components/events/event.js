import React, { Component } from "react";

import "./event.css";
 

class Event extends Component {

  constructor(props) {
    super(props);
  
  }
 
 
 

 
       

 
  render() {
     

 


    return (
    <div   className='event'>  <div className="date-wrapper"> <span> {this.props.date}</span> <p>{this.props.month}</p> </div>   </div>
    );
  }
}

export default Event;
