import React, { Component } from 'react';
import { clickButtonAddNewArticle, clickButtonRemoveArticle } from './actions';

import CreateArticle from './components/CreateArticle';
import ListArticles from './components/ListArticles';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    const {
      articles,
      clickButtonAddNewArticle,
      clickButtonRemoveArticle
    } = this.props;

    return (
      <div>
        <CreateArticle
          criarNovoArticle={(title) => clickButtonAddNewArticle(title)}
        />

        <ListArticles
          articles={articles}
          removeArticle={(id) => clickButtonRemoveArticle(id)}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    articles: store.articlesReducer.articles
  };
};

export default connect(
  mapStateToProps,
  { clickButtonAddNewArticle, clickButtonRemoveArticle }
)(App);
