import React, { Component } from 'react';
import EventsContainer from './events_container';
require('../css/reset.css');
require('../css/events.css');
require('../css/daterangepicker.css');


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header group">
          <div className="title">Events</div>
        </div>
        <EventsContainer />
      </div>
    );
  }
}

export default App;
