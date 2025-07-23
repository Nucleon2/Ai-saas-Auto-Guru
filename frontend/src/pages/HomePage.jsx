import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import UseCases from "../components/UseCases";
import Pricing from "../components/Pricing";
import FuturisticCar from "../assets/FuturisticCar.png";
import FuturisticCarPhone from "../assets/FuturisticCarPhone.png";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <div style={{ backgroundImage: `url(${FuturisticCar})` }}
            className=" hidden md:flex flex-col relative h-300 w-f bg-cover  bg-center pt-50 m-0" >
        <Pricing />
        <Footer />
      </div>
      <div style={{ backgroundImage: `url(${FuturisticCarPhone})` }}
            className="md:hidden relative h-300 w-f bg-cover  bg-center pt-50 m-0" >
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
