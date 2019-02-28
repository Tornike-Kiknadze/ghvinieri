import React, { Component } from "react";
import "./news.css";
import Header from "../../components/sectionheader/header";
import { Link } from "react-router-dom";
import uuidv1 from "uuid/v1";

class News extends Component {
  state = {
    news: [
      {
        id: uuidv1(),
        date: 11,
        month: "sektember",
        name: "event1",
        hour: "Friday:8.00-11.30PM"
      },
      {
        id: uuidv1(),
        date: 12,
        month: "sektember1",
        name: "event2",
        hour: "Friday:8.00-11.30PM"
      },
      {
        id: uuidv1(),
        date: 13,
        month: "sektember3",
        name: "event3",
        hour: "Friday:8.00-11.30PM"
      }
    ]
  };

  render() {
    const { news } = this.state;
    return (
      <section className="news" ref={this.props.reference}>
        <Header
          header="News"
          title="don't miss anything"
          styleHeader="white"
          styleTitle="white"
        />
        <div className="event-wrapper">
          {news.map(item => (
            <div className="event">
              <div className="date-wrapper">
                <span> {item.date}</span> <p>{item.month}</p>
              </div>
              <h2>{item.hour}</h2>
              <Link
                to={{
                  pathname: `newspage/${item.id}`,
                  state: news
                }}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default News;
