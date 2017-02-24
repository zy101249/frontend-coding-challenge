import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({ body: event.currentTarget.value })
  }

  render() {
    const { body } = this.state;

    return (
      <div className="search-bar">
        <form>
          <input type="submit" value="Search" onClick={ this.handleSubmit }/>
          <input
            type="text"
            placeholder="Search"
            value={ body }
            onChange={ this.handleInput } />
        </form>
      </div>
    )
  }
}

export default SearchBar;
