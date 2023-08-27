import React, { useEffect, useState } from "react";
import jsonData from "../styles/data/eventsdetails.json";
import Link from "next/link";

const EventList = () => {
  const [events, setEvents] = useState(jsonData);
  console.log("the data is", events);

  return (
    <>
      <p className="flex justify-center text-5xl tracking-[.5rem] m-3">
        Events
      </p>
      <main className="flex justify-center eventsection" id="events">
        <div className="grid place-items-center gap-3 lg:grid-cols-3 sm:grid-cols-1">
          {events.map((i, index) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={index}
              style={{ backgroundColor: "#030014" }}
            >
              <img
                className="rounded-t-lg h-80 object-cover"
                src={`${i.imageURI}`}
                alt="event image"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {i.name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {i.description}
                </p>
                <Link href="#">
                  <button className="py-2 px-4 border border-gray-400 rounded shadow">
                    Details <span aria-hidden="true">&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default EventList;
