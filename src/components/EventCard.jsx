import React from 'react';
import EventList from './EventList'; 

const EventCard = ({ title, content, backgroundImage }) => {
  return (
    <div>
      <EventList backgroundImage={backgroundImage} />
    </div>
  );
};

export default EventCard;
