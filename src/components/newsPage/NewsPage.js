import React, { Component } from "react";
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

    console.log(currentItem);
    return (
      <div>
        <h2 style={{ color: "red" }}>{currentItem.month}</h2>

        {news
          .filter(item => item.id !== currentItem.id)
          .map(news => (
            <h1>{news.id}</h1>
          ))}
      </div>
    );
  }
}

export default NewsPage;
