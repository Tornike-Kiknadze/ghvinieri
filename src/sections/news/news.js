import React, { Component } from "react";
import "./news.css";
import Header from "../../components/sectionheader/header";
import { Link } from "react-router-dom";
import news from "../../data/news";
import { FormattedMessage } from "react-intl";

import SimpleSlider from "../../components/slider/slider";
class News extends Component {
  state = {
    news
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
          <SimpleSlider>
            {news.map(item => (
              <div className="event-wrapper">
                <div key={item.id} className="event">
                  <div className="date-wrapper">
                    <span> {item.date}</span> <p>{item.month}</p>
                  </div>
                  <h2>{item.hour}</h2>
                  <Link to={`newspage/${item.id}`}>{item.name}</Link>
                </div>
              </div>
            ))}
          </SimpleSlider>
        </div>
      </section>
    );
  }
}

export default News;
