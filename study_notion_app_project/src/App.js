import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  let navigaetee = useNavigate();
  let loginfunc = () => {
    navigaetee("/login");
  };
  let signupfunc = () => {
    navigaetee("/signup");
  };
  return (
    <>
      <nav className="flex justify-between items-center w-[80%] m-auto">
        <div></div>
        <div className="items-center">
          <ul className="flex ">
            <li className="mr-4 font-bold ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-4 font-bold">
              <NavLink to="/">About</NavLink>
            </li>
            <li className="mr-4 font-bold">
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex font-bold">
          <button className="mr-4 p-4" onClick={loginfunc}>
            Log In
          </button>
          <button className="mr-4 p-4" onClick={signupfunc}>
            Sign Up
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
