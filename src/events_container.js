import React, { Component } from 'react';
import List from './list';
import SearchBar from './search_bar';

class EventsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: {},
      filter: "",
    };
    this.asArray = this.asArray.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.retrieveEvents = this.retrieveEvents.bind(this);
  }

  componentDidMount() { this.retrieveEvents(); }

  retrieveEvents() {
    const myHeaders = {
      "Authorization": "Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e",
      "Content-Type": "application/json"
    }

    const options = {
      method: 'GET',
      headers:  myHeaders,
    }

    const url = "https://api.eventable.com/v1/events/?format=json"

    fetch(url, options).then(
    (response) => {
      return response.json()
    }).then((json) => {
      this.setState({ events: json.results });
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  asArray(objects) {
    return Object.keys(objects).map(key => { return objects[key] });
  }

  filterEvents() {
    const { events, filter } = this.state;
    const filteredEvents = [];

    this.asArray(events).forEach((event) => {
      const { title } = event;
      if (title.includes(filter)) {
        filteredEvents.push(event);
      }
    })

    return filteredEvents;
  }

  render() {
    return(
      <div className="events-container">
        <SearchBar />
        <List events={ this.filterEvents() }/>
      </div>
    );
  }
}

export default EventsContainer;