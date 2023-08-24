import React, { useEffect, useState } from 'react';
//import styles from '../styles/EventCard.css';
import jsonData from './eventsdetails.json';
import styles from '../styles/EventCard.module.css';


const EventList = ({ backgroundImage }) => {
  const [events, setEvents] = useState([]);

  console.log(events);

  return (
    <div className={styles.cardcontent}>
      <div className={styles.card}>    
      {jsonData.map((event, index) => ( 
          <div className={styles.cardContent} style={{ backgroundImage: `url(${event.imageURI})` }}>  
            
              <div key={event.id}>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
