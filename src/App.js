import React, { Component } from 'react';
import ListArticles from './components/ListArticles';
import CreateArticle from './components/CreateArticles';

class App extends Component {
  state = {
    articles: [
      { title: 'React Redux Tutorial for Beginners', id: 1 },
      { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
    ]
  };

  addArticle(title) {
    this.setState({
      articles: this.state.articles.concat({
        title: title,
        id: this.state.articles.length + 1
      })
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <CreateArticle criarNovoArticle={(title) => this.addArticle(title)} />
        <ListArticles articles={articles} />
      </div>
    );
  }
}

export default App;
