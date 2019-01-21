import React from 'react';

const ListArticles = (props) => (
  <ul>
    {props.articles.map((el) => (
      <li key={el.id}>
        {el.title} |{' '}
        <button onClick={() => props.removeArticle(el.id)}>x</button>
      </li>
    ))}
  </ul>
);

export default ListArticles;
