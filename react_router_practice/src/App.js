import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Support from "./Components/Support";
import Mainheader from "./Components/Mainheader";

const App = () => {
  return (
    <div className="app">
      <nav>
        <ul className="flex m-4 ">
          <li className="p-4">
            {/* agar Link ka jagah me NavLink use krenge to 'active' classname add ho jayega jo v link click hua hoga usme ..aur uske baad usme css laga sktehai */}
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/support">SUPPORT</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Mainheader />}>
          {/* default route */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<div>This page not found</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
