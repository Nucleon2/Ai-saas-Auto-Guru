import { useCases } from "../constants";
import Button from "./Button";

const UseCases = () => {
  return (
    <div id="use-cases" className=" lg:h-dvh flex flex-col items-center justify-center mx-[10%]" >
        <h1 className="text-center text-7xl my-10" >Use cases</h1>
      <ul className="grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 ">
        {useCases.map((item, index) => {
            let customClass = ''
            if(index === 0){
                customClass = "md:col-span-2"
            } else if (index === 4) {
                customClass = "lg:col-span-2"
            } else if(index === 5) {
                customClass = "md:col-span-2 lg:col-span-1"
            }
          return <li key={index} className={`min-h-50 max-h-fit rounded-2xl p-4 ${customClass || ''} bg-gradient-to-br from-gray-950/30 to-gray-700/30 rounded-2xl p-5
            flex flex-col justify-between hover:-translate-y-2 hover:translate-x-1
            hover:shadow-lg shadow-cyan-200/50 border border-cyan-200/60 backdrop-blur-xl`}>
            <h3 className="text-lg font-semibold flex items-center gap-2 ">
              {item.icon} {item.title}
            </h3>
            
              <p className="text-md flex items-center gap-2 w-full">
                {item.description}
              </p>
            </li>;
        })}
      </ul>
    </div>
  );
};

export default UseCases;
