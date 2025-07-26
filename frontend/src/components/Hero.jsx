import car from "../assets/car.png";
import carPhone from "../assets/carPhone.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden mt-30">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl lg:text-7xl text-white">Meet Auto Guru</h1>
        <h2 className="mt-2 text-xl lg:text-3xl text-gray-300">
          Your AI-Powered Car Assistant
        </h2>

        {/* Image always directly under the text */}
        <picture className=" -mt-30 md:-mt-70 lg:mt-10 block w-full -z-10 ">
          <source media="(min-width:1024px)" srcSet={car} />
          <img
            src={carPhone}
            alt="car"
            className="mx-auto w-[90%] max-w-5xl object-contain"
            draggable="false"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
