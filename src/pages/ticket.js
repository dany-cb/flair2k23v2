import Image from "next/image";
import Tilt from "react-parallax-tilt";

function FlippingCard() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
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
        className="relative cursor-none parallax-effect-glare-scale"
      >
        <Image
          className="rounded-xl shadow-xl"
          src="/img/Pass.png"
          alt="Picture of the author"
          width={600}
          height={600}
        />
        <div className="absolute bottom-6 left-1/3 -translate-x-1/2 inner-element">
          <h1 className="text-xs font-reospec tracking-widest">
            cllz9bpyi0005tb90x6ustr5z
          </h1>
        </div>
        <div className="absolute top-6 left-10 right-0 p-4 text-space inner-element">
          <h1 className="text-5xl font-dela font-regular">Kabilan G</h1>
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
