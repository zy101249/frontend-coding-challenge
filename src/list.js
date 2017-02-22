import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const options = {
      method: "GET",
      body: {
        "username": "candidate.5545@eventable.com",
        "password": "R8VMaFVK"
      },
      headers: {
      "Content-Type": "application/json"
      }
    }
    fetch('/v1/events', options).then(
      (response) => { console.log(response) },
      (error) => { console.log(error) }
    )
  }

  render() {
    return (
      <div>"hi"</div>
    )
  }
}

export default List;
