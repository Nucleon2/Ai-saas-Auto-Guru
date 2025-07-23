import { pricingPlans } from "../constants";
import Button from "./Button.jsx"

const Pricing = () => {
  return (
    <div id="pricing" className=" md:h-dvh flex flex-col items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black via-black/40 to-transparent" />
      <h1 className="text-center text-7xl my-10">Pricing</h1>
      <ul className="md:mx-[10%] flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        {pricingPlans.map((item, index) => {
          return (
            <li
              key={index}
              className="backdrop-blur-2xl w-1/2 lg:w-1/4 p-5 h-fit rounded-2xl border-l border-t border-white/70 shadow-2xl mb-4"
            >
              <div className="bg-white/10 rounded-lg p-2">
                <h1 className="text-xl font-bold text-cyan-200">{item.title}</h1>
                <p className="text-sm text-gray-200">{item.description}</p>
                <hr />
                <h3 className="inline text-6xl">{item.price}</h3>
                <p className="lowercase inline">/Month</p>
              </div>
              <div>
                <ul className="mt-4" >{item.features.map((feature, index) => {
                  return <li key={index} className="my-2" >{feature}</li>
                })}</ul>
                <Button>{item.cta}</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pricing;
