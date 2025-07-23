import { features } from "../constants";
import Button from "./Button";

const Features = () => {
  return (
    <div id="features" className="w-full px-[10%] -mt-150 md:-mt-80 lg:py-16 lg:mt-0 bg-transparent h-dvh flex flex-col items-center justify-center">
      <h1 className="text-center text-7xl my-10 bg-transparent">Features</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-gradient-to-br from-gray-950/30 to-gray-700/30 rounded-2xl p-5
            h-50 flex flex-col justify-between hover:-translate-y-2 hover:translate-x-1
            hover:shadow-lg shadow-cyan-200/50 border border-cyan-200/60 backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold flex items-center gap-2 ">
              {feature.icon} {feature.title}
            </h3>
            <div className="flex justify-between items-end">
              <p className="text-md  font-semibol flex items-center gap-2 w-1/2">
                {feature.description}
              </p>
              <Button className="h-fit">Learn More</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
