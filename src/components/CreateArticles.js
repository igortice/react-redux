import React, { Component } from 'react';

class CreateArticle extends Component {
  state = { value: '' };

  handleChange(event) {
    this.setState({ value: event.target.value });
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
        <button onClick={() => this.props.criarNovoArticle(this.state.value)}>
          enviar
        </button>
      </div>
    );
  }
}
export default CreateArticle;
