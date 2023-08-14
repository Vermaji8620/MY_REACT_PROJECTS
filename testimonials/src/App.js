import React, { useState } from "react";
import Card from "./Components/Card";
import { reviews } from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  let clicktoinc = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    }
  };
  let clicktodec = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  let generaterandomindex = () => {
    setIndex(Math.floor(Math.random() * (4 - 0 + 1)) + 0);
  };

  return (
    <div className="w-[80%]  m-auto min-h-screen ">
      <div className="text-6xl font-bold text-center">
        <h1>Out Testimonials</h1>
      </div>
      <div className="bg-slate-300 mt-40">
        <div className="relative w-[80%] m-auto">
          <div className=" absolute w-1/4 bottom-16">
            <img className="rounded-full" src={reviews[index].image} alt="" />
          </div>
          <Card index={index} />
        </div>
        <div className="text-center">
          <span className="text-8xl">
            <button className="m-4 p-2" onClick={clicktodec}>
              &lt;
            </button>
          </span>
          <span className="text-8xl">
            <button className=" m-4 p-2" onClick={clicktoinc}>
              &gt;
            </button>
          </span>
        </div>
        <div className="text-center">
          <button
            className="text-5xl text-white bg-purple-700 p-4 m-4 rounded-md"
            onClick={generaterandomindex}
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
