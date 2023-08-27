import React, { useState } from "react";
import Image from "next/image";

const Start = () => {
  const [modal, setModal] = useState(true);
  return (
    <>
      <main className="z-50">
        <div
          className={`modalfade fixed z-10 overflow-y-auto top-0 w-full left-0 ${
            modal ? "block" : "hidden"
          }`}
          id="modal"
        >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 opacity-75"
                style={{ backgroundColor: "#000" }}
              />
              <span className="sm:inline-block sm:align-middle sm:h-screen">
                &#8203;
              </span>
              <div
                className="border border-white inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                style={{ backgroundColor: "#030014" }}
              >
                <div className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl">
                  <img
                    className="object-cover w-full rounded-t-lg h-80 md:rounded-none md:rounded-l-lg"
                    src="/img/cosmicchronicles.png"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      COSMIC CHRONICALS
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A competition to enhance your ability in the art of
                      academic writing or making papers on your project or
                      research works and present it in front of the jury.
                    </p>
                    <div className="bg-gray-200 py-3 space-x-2 text-left">
                      <button
                        className="py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={() => {
                          setModal(false);
                        }}
                      >
                        Close
                      </button>
                      <button className="py-2 px-4 border border-gray-400 rounded shadow">
                        Register Soon!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Start;
