import React, { Component, Fragment } from 'react';
import HeaderComponent from './components/headerComponent';
import NewsComponent from './components/NewsComponent';

class AppComponent extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=2c74a40a91894bcb977a43ad0a7094c5`;
    const res = await fetch(url);
    const news = await res.json();

    this.setState ({
      news: news.articles
    })
  }

  render() {
    return (
      <Fragment>
        <HeaderComponent title={'Noticias'}/>
        <NewsComponent news={this.state.news}/>
      </Fragment>
    );  
  }
}

export default AppComponent;
