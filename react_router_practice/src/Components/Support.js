import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  let navigateee = useNavigate();
  let clickhandler = () => {
    // "Move to about page ......for example"
    navigateee("/about");
  };
  let gobackhandler = () => {
    navigateee(-1);
  };
  return (
    <div>
      <div>Support</div>
      <button
        className="border bg-gray-400 rounded-md p-4"
        onClick={clickhandler}
      >
        Move to About Page
      </button>
      <button
        className="border bg-gray-400 rounded-md p-4"
        onClick={gobackhandler}
      >
        Go Back
      </button>
    </div>
  );
};

export default Support;
