import React, { Component } from 'react';
import ListItem from './list_item';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.retrieveEvents = this.retrieveEvents.bind(this);
    this.asArray = this.asArray.bind(this);
  }

  componentDidMount() {
    this.retrieveEvents();
  }

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
      this.setState(json.results);
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  asArray(objects) {
    return Object.keys(objects).map(key => { return objects[key] });
  }

  render() {
    return (
      <ul className="events-list">
        { this.asArray(this.state).map((event, idx) => {
          return <ListItem event={event} key={idx}/>
        }) }
      </ul>
    )
  }
}

export default List;
