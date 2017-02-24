import React, { Component } from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import EventsList from './events_list';
import SearchBar from './search_bar';
import CreateEventForm from './create_event_form';

class EventsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { events: [], filter: "", };
    this.updateFilter = this.updateFilter.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.retrieveEvents = this.retrieveEvents.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.compare = this.compare.bind(this);
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

  createEvent(event) {
    const { events } = this.state
    const newEvents = events.slice(0)
    newEvents.push(event)
    this.setState({ events: newEvents });
  }

  compare(a, b, field) {
    if (a[field] < b[field]) {
      return -1;
    } else if (a[field] > b[field]) {
      return 1;
    } else {
      return 0;
    }
  }

  sortBy(field) {
    const { events } = this.state;
    const sortedEvents = events.slice(0);

    this.setState({
      events: sortedEvents.sort(
        (a, b) => this.compare(a, b, field)
      )
    })
  }


  render() {
    return(
      <div className="events-container">
        <div className="events-sidebar">
          <SplitButton bsStyle={"default"} title="Sort By..." id={`split-button-basic-1`}>
            <MenuItem
              eventKey="1"
              onClick={ () => this.sortBy("title") }>
              Title
            </MenuItem>
            <MenuItem
              eventKey="2"
              onClick={ () => this.sortBy("start_time") }>
              Start Date
            </MenuItem>
          </SplitButton>
          <SearchBar updateFilter={this.updateFilter}/>
          <CreateEventForm createEvent={this.createEvent}/>
        </div>
        <EventsList events={this.filterEvents()}/>
      </div>
    );
  }
}

export default EventsContainer;
