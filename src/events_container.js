import React, { Component } from 'react';
import EventsList from './events_list';
import SearchBar from './search_bar';
import CreateEventForm from './create_event_form';

class EventsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { events: [], filter: "", };
    this.updateFilter = this.updateFilter.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.retrieveEvents = this.retrieveEvents.bind(this);
  }

  componentDidMount() { this.retrieveEvents(); }

  retrieveEvents() {
    const requestHeaders = {
      "Authorization": "Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e",
      "Content-Type": "application/json"
    }

    const options = {
      method: 'GET',
      headers:  requestHeaders,
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

  updateFilter(e, searchFilter) {
    e.preventDefault();
    this.setState({ filter: searchFilter });
  }

  filterEvents() {
    const { events, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    const filteredEvents = [];

    events.forEach((event) => {
      const { title } = event;
      const lowerCaseTitle = title.toLowerCase();

      if (lowerCaseTitle.includes(lowerCaseFilter)) {
        filteredEvents.push(event);
      }
    })

    return filteredEvents;
  }

  render() {
    return(
      <div className="events-container">
        <div className="events-sidebar">
          <SearchBar updateFilter={ this.updateFilter }/>
          <CreateEventForm />
        </div>
        <EventsList events={ this.filterEvents() }/>
      </div>
    );
  }
}

export default EventsContainer;
