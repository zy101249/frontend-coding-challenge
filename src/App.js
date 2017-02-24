import React, { Component } from 'react';
import List from './list';
import Search from './search'
require('../css/reset.css')
require('../css/events.css')


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header group">
          <div className="title">Events</div>
          <Search />
        </div>
        <div className="sidebar">

        </div>
        <List />
      </div>
    );
  }
}

export default App;
