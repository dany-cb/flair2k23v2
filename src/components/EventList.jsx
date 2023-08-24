import React, { useEffect, useState } from 'react';
import jsonData from '../styles/data/eventsdetails.json';
import styles from '../styles/EventCard.module.css';
import Image from 'next/image'


const EventList = ({ backgroundImage }) => {
  const [events, setEvents] = useState(jsonData);
  console.log("the data is",events);

  return (
    <main className="flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        {
          events.map((i,index)=>(
            <div key={index} className="h-3/4 w-3/4">
              <Image src={`${i.imageURI}`} width={500} height={500} className='object-fill' />
              {i.name}
            </div>
          ))
        }
      </div>
    </main>
  );
};

export default EventList;
