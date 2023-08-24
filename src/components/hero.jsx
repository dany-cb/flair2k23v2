import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <main>
        <div className={styles["hero-container"]}>
          <video
            autoPlay
            loop
            muted
            className={styles["hero-background-video"]}
          >
            <source src="/space-theme.webm" type="video/webm" />
          </video>
        </div>
      </main>
    </>
  );
};

export default Hero;
