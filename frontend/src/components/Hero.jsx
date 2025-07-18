import car from "../assets/car.png";
import carPhone from "../assets/carPhone.png";

const Hero = () => {
  return (<>
    <div className="relative w-full h-screen overflow-hidden">
      <div className=" absolute -z-10">
        <img
          src={carPhone}
          width={2568}
          height={2568}
          alt="car"
          className="w-full object-cover lg:hidden "
        />
        <img
          src={car}
          width={4000}
          height={2568}
          alt="car"
          className="hidden lg:block md:mt-70 "
        />
      </div>
      <div className="z-10 relative flex items-center justify-center h-full bottom-[35%] lg:bottom-[25%] flex-col">
        <h1 className="text-4xl lg:text-7xl text-white text-center">
          Meet Auto Guru
        </h1>
        <h2 className="text-xl lg:text-3xl text-gray-300 text-center">
          Your AI-Powered Car Assistant
        </h2>
        
      </div>
      {/* <div className="z-10 relative h-full bottom-[35%] lg:bottom-[25%] flex justify-center " >
        <h3 className="text-xl lg:text-3xl w-5/6 md:2/3 lg:w-1/2 text-gray-300 mb-10">
          Ask anything about your car — from repairs to recommendations.
          AutoGuru is always ready to help, 24/7.
        </h3>
      </div>  */}
    </div>
    </>
  );
};

export default Hero;
