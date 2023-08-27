import React from "react";
import styles from "../styles/hero.module.css";
import Start from "./modal";

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
          <section className="flex items-center justify-center flex-col">
            <p className="text-2xl lg:text-2xl md:text-2xl sm:text-xg lg:mt-[12rem] md:mt-[6rem] mt-[7rem]">
              Your Space odyssey starts here
            </p>
            <div className="lg:mt-[8rem] md:mt-[2rem] glasscard lg:p-20 md:p-10 flex-col justify-items-center invisible lg:visible md:visible">
              <p className="text-2xl">Department of Information Technology</p>
              <p className="text-lg text-center my-2">organizes</p>
              <p className="text-center text-5xl tracking-[.5rem]">FLAIR2K23</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
