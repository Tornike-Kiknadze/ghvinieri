import React, { Component } from "react";
import "./NewsPage.css";
import HomeButton from "../homebutton/homebutton";
import Header from "../sectionheader/header";
import { Link } from "react-router-dom";
import news from "../../data/news";
import { FormattedMessage } from "react-intl";
class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news,
      currentItem: {}
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    const currentItem = news.find(item => item.id === id);
    this.setState({ currentItem });
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id;
    const currentItem = news.find(item => item.id === id);
    this.setState({ currentItem });
    window.scrollTo(0, 0);
  }

  render() {
    window.scrollTo(0, 0);
    const { news, currentItem } = this.state;
    return (
      <div className="newspage">
        <div className="newspage-header">
          <div className="newspage-header-links">
            <HomeButton />

            <h3>News</h3>
          </div>
        </div>
        <div class="newspage-content">
          <Header
            header="News"
            title={currentItem.name}
            styleHeader="black"
            styleTitle="black"
          />
          <br />
          <p>{currentItem.text}</p>
          <div className="other-news">
            {news
              .filter(item => item.id !== currentItem.id)
              .map(item => (
                <div class="other-news-wrapper">
                  <div className="news-wrapper">
                    {" "}
                    <span> {item.date}</span> <p>{item.month}</p>
                  </div>

                  <div class="other-news-paragraph">
                    {" "}
                    <Link
                      to={{
                        pathname: `${item.id}`
                      }}
                    >
                      <FormattedMessage id={`${item.name}`} />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
