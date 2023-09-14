import React from "react";

const Sponsers = () => {
  return (
    <section
      className="bg-white rounded-lg shadow dark:bg-gray-900 mt-4 md:mt-4 lg:mt-28"
      id="contact"
      style={{ backgroundColor: " #0b0908 " }}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <h3 className="text-3xl font-dune-rise">Our Sponsors</h3>
        <div className="sm:flex sm:items-center sm:justify-between mt-5">
          <a href="#" className="flex flex-col items-center mb-4 sm:mb-0">
            <img
              src="/img/Madras Mind Works.png"
              className="h-20 mb-5"
              alt="Madras Mind Works Logo"
            />
            Madras Mind Works
          </a>
          <a href="#" className="flex flex-col items-center -mt-4 mb-4 sm:mb-0">
            <img
              src="/img/RKGS@R.png"
              className="h-32 -mb-4"
              alt="RKGS@R Logo"
            />
            RKGS@R
          </a>
          <a href="#" className="flex flex-col items-center mb-4 sm:mb-0">
            <img
              src="/img/Virogreen Logo-01.png"
              className="h-32"
              alt="Virogreen Logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
