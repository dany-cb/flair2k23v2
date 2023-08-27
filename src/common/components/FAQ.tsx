import React from "react";
import { motion, stagger, animate } from "framer-motion";
import { useState, useEffect } from "react";

const values = {
  hidden: { opacity: 0 },
  start: {
    opacity: 1,
    transition: { duration: 3, delay: 0.5 },
  },
  end: {
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
};

export default function FAQ() {
  const [Val, setVal] = useState("start");
  return (
    <div>
      <h2 className="text-2xl text-center">Frequently Asked Questions</h2>
      <div className="flex justify-center align-middle mt-8">
        <div className="bg-black w-1/2 pb-10">
          <div className=" container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-10">
              <motion.details
                className="w-full rounded-lg ring-2 ring-gray-950 bg-gray-900"
                whileTap={{ scale: 0.99 }}
              >
                <summary className="px-4 py-6">Eligibility</summary>
                <motion.p
                  variants={values}
                  className="px-4 py-3 pt-0 ml-4 -mt-4 text-gray-400"
                  initial={"hidden"}
                  animate={Val}
                  transition={{ ease: "easeOut", duration: 10 }}
                  onAnimationComplete={() => setVal("start")}
                >
                  All Engineering College students of any Department are
                  eligible to participate in Flair2k23.
                </motion.p>
              </motion.details>

              <motion.details
                className="w-full rounded-lg ring-2 ring-gray-950 bg-gray-900"
                whileTap={{ scale: 0.97 }}
              >
                <summary className="px-4 py-6">Things to be brought</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  College ID card and Bonafide certificate are necessary to be
                  brought on the day of the symposium to participate in
                  Flair2k22.
                </p>
              </motion.details>

              <motion.details
                className="w-full rounded-lg ring-2 ring-gray-950 bg-gray-900"
                whileTap={{ scale: 0.97 }}
              >
                <summary className="px-4 py-6">Dress Code</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  Any decent attire, most preferrably formals, collared T-shirts
                  for boys and Churidar for girls. No Jeans and Round neck
                  shirts are allowed.
                </p>
              </motion.details>

              <motion.details
                className="w-full rounded-lg ring-2 ring-gray-950 bg-gray-900"
                whileTap={{ scale: 0.97 }}
              >
                <summary className="px-4 py-6">No Mobile Phones</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  Participants are not allowed to use their mobile phones inside
                  the campus. The phone should be either silent or switched off.
                </p>
              </motion.details>

              <motion.details
                className="w-full rounded-lg ring-2 ring-gray-950 bg-gray-900"
                whileTap={{ scale: 0.97 }}
              >
                <summary className="px-4 py-6">Timing</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  Participants are expected to assemble 15 minutes prior to the
                  event and being late is not entertained.
                </p>
              </motion.details>

              <motion.details
                className="w-full rounded-lg ring-2 ring-gray-950 bg-gray-900"
                whileTap={{ scale: 0.97 }}
              >
                <summary className="px-4 py-6">No Negotiations</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  Judges decision will be final and binding. No arguments
                  regarding the results will be entertaine
                </p>
              </motion.details>

              <motion.details
                className="w-full rounded-lg ring-2 ring-gray-950 bg-gray-900"
                whileTap={{ scale: 0.97 }}
              >
                <summary className="px-4 py-6">Queries</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  Event specific queries can be reported to the event-incharge
                  at the venue. Any grievances and other forms of misconduct
                  must be reported to the President (Kabilan) or Vice-President
                  (Akash).
                </p>
              </motion.details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
