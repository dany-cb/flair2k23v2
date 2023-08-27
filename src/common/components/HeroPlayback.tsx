import { useState, useEffect, useRef } from "react";

export default function HeroPlayback() {
  useEffect(() => {
    const vidElement = vid.current;
    setTimeout(() => {
      vidElement.play();
    }, 0);
  }, []);
  const size = useWindowSize();
  const vid = useRef(null);
  return (
    <>
      <div className="w-screen h-screen absolute left-0 top-0 -z-10 overflow-hidden pointer-events-none">
        <video
          className="object-none min-w-full min-h-full"
          height={size.height}
          muted
          preload="metadata"
          ref={vid}
        >
          <source src="/vids/hero.webm" type="video/webm" />
        </video>
      </div>
    </>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
