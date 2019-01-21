import React, { Component } from 'react';
import ListArticles from './components/ListArticles';
import CreateArticle from './components/CreateArticle';

class App extends Component {
  state = {
    articles: [
      { title: 'React Redux Tutorial for Beginners', id: Date.now() },
      {
        title: "Redux e React: cos'è Redux e come usarlo con React",
        id: Date.now() + 1
      }
    ]
  };

  addArticle(title) {
    if (title.trim() !== '') {
      this.setState({
        articles: this.state.articles.concat({
          title: title,
          id: Date.now()
        })
      });
    }
  }

  removeArticle(id) {
    let filteredArray = this.state.articles.filter((item) => item.id !== id);
    this.setState({ articles: filteredArray });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <CreateArticle criarNovoArticle={(title) => this.addArticle(title)} />
        <ListArticles
          articles={articles}
          removeArticle={(id) => this.removeArticle(id)}
        />
      </div>
    );
  }
}

export default App;
