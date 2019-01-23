import { connect } from 'react-redux';
import React, { Component } from 'react';

import { clickButtonRemoveArticle } from '../actions';

class ListArticles extends Component {
  handlerRemoverArticle(id) {
    let articlesFiltered = this.props.articles.filter((item) => item.id !== id);
    this.props.clickButtonRemoveArticle(articlesFiltered);
  }

  render() {
    return (
      <ul>
        {this.props.articles.map((el) => (
          <li key={el.id}>
            {el.title} |{' '}
            <button onClick={() => this.handlerRemoverArticle(el.id)}>x</button>
          </li>
        ))}
      </ul>
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
  { clickButtonRemoveArticle }
)(ListArticles);
