import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const buttonSyle = "m-2 mx-5 font-mono text-2xl lg:text-4xl lg:mx-10 lg:my-5";
  const featuresStyle = "mx-4";
  const textStyle = "text-white text-xl "

  return (
    <div className="flex justify-between items-center fixed top-0 w-full bg-black text-white lg:backdrop-blur-sm z-20">
      <Link className={buttonSyle} to="/">
        <button>Auto Guru </button>
      </Link>
      <div className="w-1/2 h-13 bg-gray-800/50 rounded-full my-2  hidden lg:flex items-center justify-between">
        <div className={featuresStyle}>
          <a href="#features" className={textStyle} >features</a>
        </div>
        <div className={featuresStyle}>
          <a href="#use-cases" className={textStyle} >use Cases</a>
        </div>
        <div className={featuresStyle}>
          <a href="#pricing" className={textStyle} >Pricing</a>
        </div>
      </div>
      <Link className={buttonSyle} to="/chat">
        <Button>chat</Button>
      </Link>
    </div>
  );
};

export default Header;
