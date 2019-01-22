import React, { Component } from 'react';

import { clickButtonAddNewArticle } from '../actions';
import { connect } from 'react-redux';

class FormArticle extends Component {
  state = { value: '' };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleCriarNovoArticle() {
    let concatArticles = this.props.articles.concat({
      title: this.state.value,
      id: Date.now()
    });
    this.props.clickButtonAddNewArticle(concatArticles);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <label>
          <input
            type='text'
            placeholder='Title'
            value={this.state.value}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <button onClick={() => this.handleCriarNovoArticle()}>enviar</button>
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
  { clickButtonAddNewArticle }
)(FormArticle);
