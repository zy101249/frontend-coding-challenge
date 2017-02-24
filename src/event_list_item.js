import React from 'react';
import moment from 'moment';

const EventListItem = (props) => {
  const { title, start_time, end_time } = props.event;
  const formattedStartTime = moment(start_time).format("MM/DD/YYYY, h:mm a");
  const formattedEndTime = moment(end_time).format("MM/DD/YYYY, h:mm a");

  return(
    <li className="list-item">
      <div className="list-item-title">{ title }</div>
      <div className="list-item-start-time">{ formattedStartTime }</div>
      <div className="list-item-end-time">{ formattedEndTime }</div>
    </li>
  )
}

export default EventListItem;
