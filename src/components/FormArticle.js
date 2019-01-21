import React, { Component } from 'react';

class FormArticle extends Component {
  state = { value: '' };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleCriarNovoArticle() {
    this.props.criarNovoArticle(this.state.value);
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
export default FormArticle;
