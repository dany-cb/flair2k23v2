import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Start = () => {
  const [modal, setModal] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("modalshow")) {
      setModal(false);
    }
  }, [modal]);

  return (
    <>
      <div
        id="marketing-banner"
        tabindex="-1"
        className={`fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 glasscard border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 bottom-6 dark:border-gray-600 ${
          modal ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600"
          >
            <img src="img/licet.png" className="h-6 mr-2" alt="Flowbite Logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              FLAIR2K23
            </span>
          </a>
          <p className="flex items-center text-sm font-normal text-gray-300 dark:text-gray-400">
            Registrations for the event COSMIC CHRONICLES is open now!
          </p>
        </div>
        <div className="flex items-center flex-shrink-0">
          <a
            href="/events/cosmic-chronicles"
            className="py-2 px-4 border border-gray-400 rounded shadow mx-3"
          >
            Register Now!
          </a>
          <button
            data-dismiss-target="#marketing-banner"
            type="button"
            className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => {
              setModal(false);
              localStorage.setItem("modalshow", false);
            }}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Start;
