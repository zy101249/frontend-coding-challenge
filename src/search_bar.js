import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { body: "" }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value })
  }

  render() {
    const { body } = this.state;
    const { updateFilter } = this.props;

    return (
      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Search Events"
            value={body}
            onChange={ this.handleInput } />
            <input
            type="submit"
            value="Search"
            onClick={ (e) => updateFilter(e, body) }/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
