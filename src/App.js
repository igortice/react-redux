import React, { Component } from 'react';

import CreateArticle from './components/CreateArticle';
import ListArticles from './components/ListArticles';

class App extends Component {
  render() {
    return (
      <div>
        <CreateArticle />

        <ListArticles />
      </div>
    );
  }
}

export default App;
