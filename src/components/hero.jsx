import React from "react";
import styles from "../styles/hero.module.css";
import Start from "./modal";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <main id="home z-40">
        <Start />
        <div className={styles["hero-container"]}>
          <video
            autoPlay
            loop
            muted
            className={styles["hero-background-video"]}
          >
            <source src="/space-theme.webm" type="video/webm" />
          </video>
          <section className="flex items-center justify-center flex-col mt-[10rem]">
            <div className="text-2xl lg:text-2xl md:text-2xl sm:text-xg  text-center space-y-4 -mt-3">
              <p className="lg:hidden md:hidden font-bold tracking-[.1rem]">
                Your <span>Space odyssey</span> starts here.
              </p>
            </div>
            <div className=" lg:mt-[4rem] md:mt-[2rem] lg:p-20 md:p-10 flex flex-col justify-center items-center invisible lg:visible md:visible">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1082.38 245.62"
                className="fill-slate-200"
                fill="currentColor"
              >
                <defs>
                  {/* <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" className="from-amber-500" />
                    <stop offset="50%" className="via-orange-600" />
                    <stop offset="100%" className="to-yellow-500" />
                  </linearGradient> */}
                </defs>
                <path
                  class="cls-1"
                  d="M6641.31,7043.71h205.92v48.71H6699.35v57.75h139.72v44H6699.35v94.51h-58Z"
                  transform="translate(-6641.31 -7043.5)"
                />
                <path
                  class="cls-1"
                  d="M6874.46,7044h58v196.3h141.17V7289H6874.46Z"
                  transform="translate(-6641.31 -7043.5)"
                />
                <path
                  class="cls-2"
                  d="M7296.87,7247.87H7176.12L7161,7289h-60.08l94.79-245h81.67l95.08,245H7312Zm-16.33-44L7242,7099.12H7231l-38.5,104.71Z"
                  transform="translate(-6641.31 -7043.5)"
                />
                <path
                  class="cls-2"
                  d="M7398.62,7044h58v245h-58Z"
                  transform="translate(-6641.31 -7043.5)"
                />
                <path
                  class="cls-2"
                  d="M7665.73,7289l-40.25-72.92h-79V7289h-58V7044H7617c65.62,0,100.33,30.63,100.33,87.8,0,34.12-16.62,58.91-41.71,72.62l47.84,84.59Zm-119.3-117.55h67.38c29.46,0,45.79-13.41,45.79-39.37s-16.33-39.38-45.79-39.38h-67.38Z"
                  transform="translate(-6641.31 -7043.5)"
                />
                <rect class="cls-1" x="175.19" width="99" height="49" />
                <rect
                  class="cls-1"
                  x="418.19"
                  y="196.7"
                  width="80"
                  height="48.8"
                />
                <rect
                  class="cls-1"
                  x="700.19"
                  y="197.45"
                  width="113"
                  height="48.05"
                />
                <rect
                  class="cls-1"
                  x="783.19"
                  y="0.5"
                  width="124.68"
                  height="48.5"
                />
              </svg>
              <p className="text-center text-md font-bold tracking-[.5rem] mt-3">
                2K23
              </p>

              <p className="text-center text-md font-bold tracking-[.5rem] mt-2">
                A NATIONAL LEVEL TECHNICAL SYMPOSIUM
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
