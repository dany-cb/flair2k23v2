import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <main id="home">
        <div className={styles["hero-container"]}>
          <video
            autoPlay
            loop
            muted
            className={styles["hero-background-video"]}
          >
          <source src="/space-theme.webm" type="video/webm" />
          </video>
            <section className="mt-[14rem] flex items-center justify-center flex-col">
              <div className="text-2xl">Your Space odyssey starts here</div>
              <div className="mt-[12rem] sm:mt-[10rem] glasscard p-20 flex-col justify-items-center">
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
