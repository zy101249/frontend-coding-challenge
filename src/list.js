import React from 'react';
import ListItem from './list_item';

const List = (props) => {
  const { events } = props;

  return (
    <div className="events-list-container">
      <ul className="events-list">
        { events.map((event, idx) => {
          return <ListItem event={event} key={idx}/>
        }) }
      </ul>
    </div>
  )
}

export default List;
