import React, { Component } from 'react';
import List from './list';
import Search from './search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <List />
      </div>
    );
  }
}

export default App;
