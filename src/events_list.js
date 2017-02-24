import React from 'react';
import EventListItem from './event_list_item';

const EventsList = (props) => {
  const { events } = props;

  return (
    <div className="events-list-container">
      <ul className="events-list">
        { events.map((event, idx) => {
          return <EventListItem event={event} key={idx}/>
        }) }
      </ul>
    </div>
  )
}

export default EventsList;
