import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { body: "" }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ body: event.currentTarget.value })
  }

  render() {
    const { body } = this.state;
    const { updateFilter } = this.props;

    return (
      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Search"
            value={ body }
            onChange={ this.handleInput } />
            <input
            type="submit"
            value="Search"
            onClick={ (event) => updateFilter(event, body) }/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
