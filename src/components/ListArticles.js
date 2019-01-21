import React from 'react';

const ListArticles = (props) => (
  <ul>
    {props.articles.map((el) => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

export default ListArticles;
