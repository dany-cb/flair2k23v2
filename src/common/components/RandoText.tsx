import { useEffect, useState } from "react";
import { RandomReveal } from "react-random-reveal";
import styles from "./RandoText.module.scss";

const charSet =
  "☍⋏⍜⍙⊑⟟⌇⌿⍜⍙⟒⍀⏚⟒☊⏃⎍⌇⟒⏁⊑⟟⌇⌇⎍⌿⟒⍀⌇⍜⌰⎅⟟⟒⍀⌰⏃⋏⎅⌇⍙⟟⏁⊑⏃⏚⍜⍜⋔⎅⟒⏃⌰⟟⋏☌⋔⏃⌇⌇⟟⎐⟒⏃⍀⟒⏃⎅⏃⋔⏃☌⟒⏁⍜⏃⌰⌰⍜⎎⏁⊑⟒⌇⟒☌⍀⍜⎍⋏⎅☌⎍⊬⌇⏃⍀⍜⎍⋏⎅⊑⟟⋔⏁⊑⟒⋏⟊⎍⋔⌿⌇⏁⍜⏁⊑⟒⋏⟒⌖⏁⏁⏃⍀☌⟒⏁⟟⋏⍀⏃⋏☌⟒⌰⏃⋏⎅⟟⋏☌⍙⟟⏁⊑⏃⋏⍜⏁⊑⟒⍀⏚⍜⍜⋔!⟟⎎⊑⟒'⌇⋏⍜⏁⟊⎍⟒⊑⏃⌇⎐⟒⍀⊬⊑⟟☌⊑⊑⟟⏁⌿⍜⟟⋏⏁⌇⎎⍜⍀⏓⟒⌰⟟⌖⟟⍀⏚⎍⏁☊⏃⋏⌇⏁⟟⌰⌰⏚⟒⎅⟒⎎⟒⏃⏁⟒⎅⏚⊬⊑⟟☌⊑⎅⏃⋔⏃☌⟒⎍⋏⟟⏁⌇⎅⎍⟒⏁⍜⊑⟟⌇⌇⌰⍜⍙⏃⏁⏁⏃☊☍".split(
    ""
  );
export default function RandoText({ text }) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <div className={`${styles["rando-text"]} flex-col flex`}>
      {start ? (
        <RandomReveal
          isPlaying
          duration={2}
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
