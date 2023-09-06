import React, { useEffect, useState } from "react";
import jsonData from "../styles/data/eventsdetails.json";
import Link from "next/link";

const EventList = () => {
  const [events, setEvents] = useState(jsonData);

  return (
    <>
      <p className="flex justify-center text-5xl tracking-[.5rem] m-3">
        Events
      </p>
      <main className="flex justify-center eventsection" id="events">
        <div className="grid place-items-center gap-7 lg:grid-cols-3 sm:grid-cols-1">
          {events.map((i, index) => (
            <div
              className="text-white max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={index}
              style={{ backgroundColor: "#030014" }}
            >
              <img
                className="rounded-t-lg h-80 object-cover"
                src={`${i.imageURI}`}
                alt="event image"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {i.name}
                </h5>

                <p className="mb-3 font-normal">{i.description}</p>
                <Link
                  href={`/events/${i.name.toLowerCase().replace(/ /g, "-")}`}
                >
                  <button
                    className="py-2 px-4 border border-gray-400 shadow-lg max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl my-5 transform translate-y-4 
                    hover:bg-indigo-950 shadow-purple-800/100 hover:translate-y-0 duration-500 ease-in-out"
                  >
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
