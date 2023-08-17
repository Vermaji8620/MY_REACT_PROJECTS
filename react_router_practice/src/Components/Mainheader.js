import React from "react";
import { Outlet } from "react-router-dom";

const Mainheader = () => {
  return (
    <div>
      {/* parent child hai Mainheader .....to baki ka jo iska child component hai usko ye render nahi hone dega ......to child component ko v sath me render krwane k liye Outlet ka use krna pdega */}

      <Outlet />
    </div>
  );
};

export default Mainheader;
