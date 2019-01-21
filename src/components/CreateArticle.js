import React from 'react';
import FormArticle from './FormArticle';

const CreateArticle = (props) => (
  <FormArticle criarNovoArticle={props.criarNovoArticle} />
);

export default CreateArticle;
