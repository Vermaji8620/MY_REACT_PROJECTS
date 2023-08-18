import React from "react";
import Signup from "../assets/signup.png";

const Home = () => {
  return (
    <>
      <div className="w-full bg-black text-white h-[100vh] flex">
        <div className="w-1/2">
          <div className="w-1/2">
              <div><h2>Join the millions learning to code wwith StudyNotion for free</h2></div>
              <div><h3>Build skills for today, tomorrow and beyond</h3></div>
              <div className="italic"><h5>Education to future proof your career</h5></div>
              
          </div>
        </div>
        <div className="w-1/2">
          <img src={Signup} alt="" />
        </div>
      </div>
    </>
  );
};


export default Home;