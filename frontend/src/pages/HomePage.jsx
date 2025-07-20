import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import UseCases from "../components/UseCases";
import Pricing from "../components/pricing";
import FuturisticCar from "../assets/FuturisticCar.png";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <div style={{ backgroundImage: `url(${FuturisticCar})` }}
            className="relative h-full w-full bg-cover bg-center pt-50 m-0" >
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
