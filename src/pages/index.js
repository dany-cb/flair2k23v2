import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import { useEffect, useRef, useState, useCallback } from "react";
import HeroPlayback from "../common/components/HeroPlayback";
import RandoText from "../common/components/RandoText";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import Events from "../common/components/Events";

const titleV = {
  hidden: {
    opacity: 0,
  },
  start: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 2.5, delay: 1.8 },
  },
  end: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
      delay: 0.8,
    },
  },
  blink: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
};

let checkScroll = true;

export default function Home() {
  const oldScroll = useRef(0);

  const onScroll = useCallback((event) => {
    const { scrollY, innerHeight } = window;
    if (checkScroll) {
      if (scrollY > oldScroll.current && scrollY > innerHeight) {
        showHeader(false);
      } else {
        showHeader(true);
      }
      oldScroll.current = scrollY;
      setTimeout(() => {
        checkScroll = true;
      }, 100);
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const [title, setTitle] = useState("start");
  const [header, showHeader] = useState(false);

  return (
    <>
      <div className="flex" id="0">
        {header ? <Header /> : null}
        <HeroPlayback />
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center h-screen pb-28 lg:pb-10">
          <div
            className={!header ? "invisible" : "text-sm font-bold lg:text-xl"}
          >
            DEPARTMENT OF INFORMATION TECHNOLOGY
          </div>
          <div className={!header ? "invisible" : "mb-8 lg:mb-10 lg:text-xl"}>
            ORGANIZES
          </div>
          <motion.div
            viewport={{ once: true }}
            variants={titleV}
            className="font-title tracking-wider pointer-events-none select-none"
            initial={"hidden"}
            animate={title}
            onAnimationComplete={() => {
              if (title === "start") {
                setTitle("end");
                setTimeout(() => {
                  showHeader(true);
                  setTitle("blink");
                }, 2500);
              }
              console.log("done");
            }}
          >
            <Image
              src="/img/Logo v1.png"
              alt="logo"
              width={700}
              height={0}
              style={{
                position: "relative",
                width: "60%",
                height: "auto",
                margin: "auto",
              }}
            />
          </motion.div>
          <div
            className={
              !header
                ? "invisible"
                : "mt-10 font-bold text-xl border-y py-2 border-white lg:text-2xl lg:mt-14 lg:px-10 lg:py-4"
            }
          >
            &quot; A rendezvous into the horizon
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <Events />
    </>
  );
}
