import React, { Component } from "react";
import "./NewsPage.css";
import HomeButton from "../homebutton/homebutton";
import Header from "../sectionheader/header";



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

  componentDidMount() {
    window.scrollTo(0, 0);
  }


  render() {
    const { news, currentItem } = this.state;

    console.log(this.props);
    return (
      <div className="newspage">
        <div className="newspage-header">
          <div className="newspage-header-links">
            <HomeButton />

            <h3>News</h3>
          </div>
        </div>
        <div class="newspage-content">
          <Header header="News"
            title={currentItem.name}
            styleHeader="black"
            styleTitle="black" />
          <br />   <br />
          <p >{currentItem.text}</p>
          <div className='other-news'>
            {news
              .filter(item => item.id !== currentItem.id)
              .map(news => (
                <div class="other-news-wrapper">
                  <div className='news-wrapper'> <span> {news.date}</span> <p>{news.month}</p></div>

                  <div class="other-news-paragraph">
                    {news.name}
                  </div>
                </div>
              ))}</div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
