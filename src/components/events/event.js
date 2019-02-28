import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./event.css";
import About from "../../sections/about/about";

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events } = this.props;

    return (
      <React.Fragment>
        {events.map(event => (
          <div className="event">
            <div className="date-wrapper">
              <span> {event.date}</span> <p>{event.month}</p>
            </div>{" "}
            <Link to={`${event.id}`}>rame</Link>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Event;
