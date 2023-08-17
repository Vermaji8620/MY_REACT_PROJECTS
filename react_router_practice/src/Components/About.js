import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigaeteee = useNavigate();
  let finchandler = () => {
    navigaeteee("/support");
  };
  return (
    <>
      <div>About</div>
      <button
        className="border bg-gray-400 rounded-md p-4"
        onClick={finchandler}
      >
        Go to support page
      </button>
    </>
  );
};

export default About;
