import { motion } from "framer-motion";
import Link from "next/link";

export default function Events() {
  const elist = [
    "COMIC CHRONICALS",
    "PITCH BLACK",
    "SPACE COMPLEXITY",
    "CELESTIAL CANVAS",
    "MEMESCAPE",
    "TESSERACT",
    "CONSTELLATION",
  ];
  return (
    <>
      <section className="overflow-x-clip">
        <div className="z-40 sticky mt-[33%] top-1/3 right-10 h-screen flex-col space-y-2 justify-center">
          {elist.map((i, index) => (
            <div key={index} className="space-x-2 flex justify-end">
              <div className="hovervisible">{i}</div>
              <a href={`#${index + 1}`}>{index + 1}</a>
            </div>
          ))}
        </div>
        {elist.map((i, index) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: "10%" }}
            transition={{ delay: 1, ease: "easeInOut" }}
            className="z-auto h-[101vh] w-full"
            id={`${index + 1}`}
          >
            <div className="lg:text-[125px] md:text-[70px] text-[35px] font-[1150] -ms-5">
              {i}
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}
