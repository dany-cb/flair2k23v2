import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useEffect, useCallback, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useRouter } from "next/router";
import { request } from "@/lib/utils";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FiLinkedin, FiLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { BsInstagram } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import Head from "next/head";
import axios from "axios";
// import domtoimage from "dom-to-image";
// import { saveAs } from "file-saver";

export default function Ticket() {
  const [ticketDetails, setTicketDetails] = useState(null);
  const router = useRouter();
  const refElem = useRef(null);

  const [screenshotUrl, setScreenshotUrl] = useState("");

  const handleCaptureScreenshot = async () => {
    try {
      const response = await axios.get("/api/screenshot", {
        params: {
          url: window.location.href,
        },
        responseType: "blob", // Ensure the response is treated as binary data
      });

      // Create a Blob URL from the response data and set it as the screenshot URL
      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: "image/png" });

      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element to trigger the download
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "screenshot.png"; // Specify the filename for download

      // Trigger a click event to start the download
      document.body.appendChild(a);
      a.click();

      // Remove the anchor element
      document.body.removeChild(a);

      // Revoke the Blob URL to free up resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  };

  const sendEmail = async () => {
    try {
      const options = {
        method: "post",
        url: `/api/sendEmail`,
      };
      const result = await request(options);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 384,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 119.65252905562242,
          size: 0,
          duration: 0.6381468216299863,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 247.28189338161965,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    (async () => {
      try {
        const options = {
          method: "post",
          url: `/api/verifyTicket`,
          data: {
            ticketId: id,
          },
        };
        const result = await request(options);
        if (!result) {
          return router.push("/404");
        }
        setTicketDetails(result.data);
        console.log(id);
      } catch (error) {
        console.log(error);
        router.push("/404");
      }
    })();
  }, [router.isReady]);

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
    fire();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ticketDetails]);

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
        origin: { x: 0 },
        angle: 60,
        particleCount: Math.floor(200 * particleRatio),
        colors: ["#cb9b51", "#f6e27a", "#f6f2c0", "#d43d19", "#e47853"],
      });
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { x: 1 },
        angle: 120,
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

  // setInterval(() => {
  //   fire();
  // }, 3000);
  if (!ticketDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Flair 2k23 | Ticket</title>
        <meta name="description">
          Flair 2k23 is a national level technical symposium conducted by the
          Department of Information Technology, Loyola-ICAM College of
          Engineering and Technology, Chennai.
        </meta>
        <meta property="og:title" content="Flair 2k23 | Ticket" />
        <meta
          property="og:description"
          content="Flair 2k23 is a national level technical symposium conducted by the
          Department of Information Technology, Loyola-ICAM College of
          Engineering and Technology, Chennai."
        />
        <meta property="og:image" content="/img/Logo v1.png" />
      </Head>
      <section
        className="flex flex-col justify-center items-center w-screen h-screen"
        ref={refElem}
      >
        {/* navbar */}
        <div className="absolute w-screen top-0 left-0 right-0 z-10">
          <div className="flex w-screen sm:justify-between justify-center items-center px-8 py-4">
            <Image
              className="shadow-xl sm:block hidden"
              src="/img/licet2.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
            <Link href="/">
              <Image
                className="shadow-xl flair-logo"
                src="/img/Logo v1.png"
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </Link>
            <Image
              className="shadow-xl sm:block hidden"
              src="/img/grait.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
        </div>

        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        <Particles options={particlesOptions} init={particlesInit} />

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
          className="relative cursor-none rounded-3xl sm:w-auto w-full parallax-effect-glare-scale"
        >
          <div className="relative glare overflow-hidden rounded-3xl">
            <Image
              className="rounded-3xl shadow-xl p-1"
              src="/img/Pass.png"
              alt="Picture of the author"
              width={600}
              height={600}
              priority
            />
            <div className="blob overflow-hidden" />
            <div className="fakeblob overflow-hidden" />
            <div class="ribbon ribbon-bottom-left font-reospec">
              <span className="">Volunteer</span>
            </div>
          </div>
          <div className="absolute top-8 left-16 right-0 text-space inner-element">
            <h1 className="sm:text-4xl text-xl font-dela font-regular text-gradient">
              {ticketDetails.name}
            </h1>
            <p className="sm:text-sm text-xs sm:mt-4 mt-1 w-2/3 font-reospec">
              {ticketDetails.department}
            </p>
            <p className="sm:text-sm sm:block hidden sm:mt-2 w-7/12 font-reospec">
              {ticketDetails.institution}
            </p>
          </div>
          <div className="absolute bottom-7 left-1/3 -translate-x-1/2 inner-element">
            <h1 className="text-xs font-reospec tracking-widest text-gradient">
              {ticketDetails.id}
            </h1>
          </div>
        </Tilt>
        <Badge
          variant="outline"
          className="absolute bottom-32 text-white rounded-full p-2 px-8 backdrop:blur-3xl bg-transparent border-gray-700"
        >
          <span>Share ticket: </span>
          <a
            target="_blank"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=Flair%202k23%20Ticket`}
          >
            <Button
              variant="outline"
              size="icon"
              className="ms-2 rounded-full border-gray-500"
            >
              <FiLinkedin size={"1.2rem"} />
            </Button>
          </a>
          <a
            target="_blank"
            href={`https://www.instagram.com/?url=${window.location.href}`}
          >
            <Button
              variant="outline"
              size="icon"
              className="ms-2 rounded-full border-gray-500"
            >
              <BsInstagram size={"1.2rem"} />
            </Button>
          </a>
          <Button
            variant="outline"
            size="icon"
            className="ms-2 rounded-full border-gray-500"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
          >
            <FiLink size={"1.2rem"} />
          </Button>
        </Badge>
        <Button
          className="absolute bottom-20 text-white rounded-full p-2 px-4"
          onClick={() => {
            // router.push("/register");
            // handleCaptureScreenshot();
            sendEmail();
          }}
        >
          <IoTicketOutline className="mr-2 h-4 w-4" /> Claim your ticket!
        </Button>
      </section>
    </>
  );
}
