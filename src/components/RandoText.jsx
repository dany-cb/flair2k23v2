import { useEffect, useRef, useState } from "react";
import { RandomReveal } from "react-random-reveal";
import styles from "./RandoText.module.scss";
import { inView } from "framer-motion";

const charSet = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω".split("");
export default function RandoText({ text, delay }) {
  const [start, setStart] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    inView(element.current, () => {
      setTimeout(() => {
        setStart(true);
      }, delay * 1000);
    });
  }, []);

  return (
    <div
      className={`${styles["rando-text"]} flex-col flex select-none`}
      ref={element}
    >
      {start ? (
        <RandomReveal
          isPlaying
          duration={3}
          characters={text}
          characterSet={charSet}
          revealEasing="linear"
          revealDuration={2}
          updateInterval={0.09}
        />
      ) : (
        ""
      )}
    </div>
  );
}
