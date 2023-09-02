import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useEffect, useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function FlippingCard() {
  useEffect(() => {
    const handleMouseMove = (ev) => {
      document.querySelectorAll(".glare").forEach((card) => {
        const blob = card.querySelector(".blob");
        const fakeblob = card.querySelector(".fakeblob");
        if (!blob || !fakeblob) return;

        const rec = fakeblob.getBoundingClientRect();
        blob.style.opacity = "1";

        blob.style.transform = `translate(${
          ev.clientX - rec.left - rec.width / 2
        }px, ${ev.clientY - rec.top - rec.height / 2}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.6 },
        particleCount: Math.floor(200 * particleRatio),
        colors: ["#cb9b51", "#f6e27a", "#f6f2c0", "#d43d19", "#e47853"],
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  setInterval(() => {
    fire();
  }, 2000);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="lightblue"
        glarePosition="all"
        scale={1.2}
        transitionSpeed={2000}
        glareBorderRadius="25px"
        perspective={500}
        gyroscope={true}
        className="relative cursor-none p-1 glare overflow-clip rounded-3xl parallax-effect-glare-scale"
      >
        <div class="blob"></div>
        <div class="fakeblob"></div>

        <Image
          className="rounded-3xl shadow-xl"
          src="/img/Pass.png"
          alt="Picture of the author"
          width={600}
          height={600}
        />
        <div className="absolute bottom-6 left-1/3 -translate-x-1/2 inner-element">
          <h1 className="text-xs font-reospec tracking-widest text-gradient">
            cllz9bpyi0005tb90x6ustr5z
          </h1>
        </div>
        <div className="absolute top-6 left-10 right-0 p-4 text-space inner-element">
          <h1 className="text-5xl font-dela font-regular text-gradient">
            Kabilan G
          </h1>
          <p className="text-xs mt-4 w-2/3 font-montserrat">
            Loyola ICAM College of Engineering and Technology, Chennai, Tamil
            Nadu
          </p>
        </div>
      </Tilt>
    </div>
  );
}

export default FlippingCard;
