import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import { useEffect, useState } from "react";
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

export default function Home() {
  const [title, setTitle] = useState("start");
  const [header, showHeader] = useState(false);

  return (
    <>
      <div className="flex">
        {header ? <Header /> : null}
        <HeroPlayback />
        <div className="max-w-7xl w-full mx-auto text-base lg:text-4xl flex flex-col items-center justify-center h-screen pb-28">
          <div className={!header ? "invisible" : ""}>
            DEPARTMENT OF INFORMATION TECHNOLOGY
          </div>
          <div
            className={
              !header ? "mb-5 mt-1 lg:mb-10 invisible" : "mb-5 mt-1 lg:mb-10"
            }
          >
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
                width: "50%",
                height: "auto",
                margin: "auto",
              }}
            />
          </motion.div>
        </div>
        {/* <Footer /> */}
      </div>
      <Events />
    </>
  );
}
