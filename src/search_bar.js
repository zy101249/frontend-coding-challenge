import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { body: "" }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value })
    this.props.updateFilter(e, e.currentTarget.value)
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
        </form>
      </div>
    )
  }
}

export default SearchBar;
