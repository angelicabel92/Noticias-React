import React, { Component, Fragment } from 'react';
import HeaderComponent from './components/headerComponent';
import NewsComponent from './components/NewsComponent';
import FormComponent from './components/FromComponent';

class AppComponent extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=2c74a40a91894bcb977a43ad0a7094c5`;
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
        <FormComponent getNews={this.getNews} />
        <NewsComponent news={this.state.news}/>
      </Fragment>
    );  
  }
}

export default AppComponent;
