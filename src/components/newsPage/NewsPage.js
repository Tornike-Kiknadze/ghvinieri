import React, { Component } from "react";
import "./NewsPage.css";
import { Link } from "react-router-dom";
import Arrow from "../../assets/svg/arrow";
class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      currentItem: {}
    };
  }
  componentWillMount() {
    const news = this.props.location.state;
    const id = this.props.match.params.id;
    const currentItem = news.find(item => item.id === id);
    this.setState({ news, currentItem });
  }
  render() {
    const { news, currentItem } = this.state;

    console.log(this.props);
    return (
      <div className="newspage">
        <div className="newspage-header">
          <div className="newspage-header-links">
            <Link to="/">
              {" "}
              <Arrow width={50} height={20} />
              Home
            </Link>

            <h3>News</h3>
          </div>
        </div>
        <div class="newspage-content">
          <h2 style={{ color: "red" }}>{currentItem.name}</h2>
          <p>{currentItem.text}</p>
          {news
            .filter(item => item.id !== currentItem.id)
            .map(news => (
              <h1>{news.id}</h1>
            ))}
        </div>
      </div>
    );
  }
}

export default NewsPage;
