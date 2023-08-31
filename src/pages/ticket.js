import Image from "next/image";
import Tilt from "react-parallax-tilt";

function FlippingCard() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="lightblue"
        glarePosition="all"
        scale={1.2}
        transitionSpeed={2000}
        glareBorderRadius="25px"
        perspective={500}
        gyroscope={true}
        className="relative cursor-none parallax-effect-glare-scale"
      >
        <Image
          className="rounded-xl"
          src="/img/Pass.png"
          alt="Picture of the author"
          width={600}
          height={600}
        />
        <div className="absolute top-20 left-10 right-0 p-4 text-space inner-element">
          <h1 className="text-5xl font-semibold">Crispin R</h1>
          <p className="text-xs mt-4 w-1/2">
            Loyola ICAM College of Engineering and Technology
          </p>
        </div>

        <div className="absolute top-5 left-10 right-0 p-4 inner-element">
          <h1 className="text-xl font-semibold">01</h1>
        </div>
      </Tilt>
    </div>
  );
}

export default FlippingCard;
