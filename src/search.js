import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({ body: event.currentTarget.value })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { body } = this.state;

    return (
      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Search"
            value={ body }
            onChange={ this.handleInput } />
          <input type="submit" value="Search" onClick={ this.handleSubmit }/>
        </form>
      </div>
    )
  }
}

export default Search;
