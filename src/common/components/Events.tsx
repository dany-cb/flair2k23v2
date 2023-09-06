import { inView, motion } from "framer-motion";
import VidPlayback from "./VidPlayback";
import { useRef } from "react";
import RandoText from "./RandoText";

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.7 } },
};

export default function Events() {
  const elist = [
    {
      name: "Cosmic Chronicles",
      description:
        "A competition to enhance your ability in the art of academic writing or making papers on your project or research works and present it in front of the jury.",
    },
    {
      name: "Pitch Black",
      description:
        "Introduce your story idea and define your angle. Grab the attention of your audience. take them on a clear and logical journey. Leave them with a compelling call to action.",
    },
    {
      name: "Space Complexity",
      description:
        "Unravel the mysteries of code errors as you navigate through the vast expanse of technical challenges, bringing your programs back from the brink of 'debugger not found' errors.",
    },
    {
      name: "Celestial Canvas",
      description:
        "Explore the frontiers of user experience as we meld futuristic aesthetics with cutting-edge usability, taking inspiration from the visually captivating world of the Interstellar movie.",
    },
    {
      name: "Orbiting Oddities",
      description:
        "A competition where you'll bend space and code to create hilarious Interstellar-themed memes that transcend dimensions of humor and technology.",
    },
    {
      name: "Tesseract",
      description:
        "An exciting version of dumb-charades in which the team has to enact the given technical terms.",
    },
    {
      name: "Constellation",
      description:
        "Decode the cosmos one image at a time, connecting visual cues to unravel technical terms and celestial concepts in this interactive and engaging challenge",
    },
  ];

  const itemsRef = useRef([]);
  return (
    <>
      <div className="group z-40 sticky top-1/3 mt-[18%] right-0 mr-1 lg:mr-5 flex-col justify-center h-0 select-none">
        {elist.map((i, index) => (
          <div key={index} className="ml-auto space-x-2 w-fit p-1">
            <a
              className="group/btn cursor-pointer p-2"
              onClick={() => {
                itemsRef.current[index + 1].scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <div className="opacity-0 group-hover:opacity-100 text-[#ffffff74] group-hover/btn:text-white group-hover/btn:text-[120%] transition-all inline-block">
                {i.name}
              </div>
              <span className="group-hover/btn:text-[170%] text-[#ffffff74] group-hover/btn:text-white transition-all ml-2">
                •
              </span>
            </a>
          </div>
        ))}
      </div>
      <section className="w-full -mt-[18%]">
        {elist.map((title, index) => (
          <div
            className="w-full h-[105vh] relative"
            key={index + 1}
            ref={(el) => {
              itemsRef.current[index + 1] = el;
            }}
          >
            <VidPlayback link={"/vids/" + (index + 1).toString() + ".webm"} />
            <motion.div
              className={
                "absolute left-10 lg:left-40 font-title font-bold text-3xl tracking-wider" +
                (index % 2 === 0
                  ? " bottom-[20%] lg:bottom-[30%]"
                  : " top-[20%] lg:top-[30%]")
              }
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
            >
              <RandoText text={title.name} delay={0.7} />
              <div className="text-2xl w-[75%] lg:w-1/2 font-serif font-normal mt-5 tracking-normal leading-tight">
                {title.description}
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </>
  );
}
