import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.retrieveEvents = this.retrieveEvents.bind(this);
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
      console.log(this.state)
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }


  render() {
    return (
      <div>"hi"</div>
    )
  }
}

export default List;
