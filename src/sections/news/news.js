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
        hour: "Friday:8.00-11.30PM",
        text:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
      },
      {
        id: uuidv1(),
        date: 12,
        month: "sektember1",
        name: "event2",
        hour: "Friday:8.00-11.30PM",
        text:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
      },
      {
        id: uuidv1(),
        date: 13,
        month: "sektember3",
        name: "event3",
        hour: "Friday:8.00-11.30PM",
        text:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
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
            <div key={item.id} className="event">
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
