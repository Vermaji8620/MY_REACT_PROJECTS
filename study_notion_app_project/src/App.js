import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import DashBoard from "./Components/DashBoard";
// import { useState } from "react";
import LogoImg from "./assets/Logo.svg";
import { toast } from "react-hot-toast";

function App() {
  //   const [login, setLogin] = useState("Login");
  //   const [signup, setSignup] = useState("Signup");

  let navigaetee = useNavigate();

  let dispmain = () => {
    navigaetee("/dashboard");
    toast("Logged in");
    document.getElementsByClassName("fbut")[0].style.display = "none";
    document.getElementsByClassName("sbut")[0].style.display = "none";
    document.getElementsByClassName("tbut")[0].style.display = "block";
    document.getElementsByClassName("fobut")[0].style.display = "block";
  };

  let dispsec = () => {
    toast("Logged out");
    document.getElementsByClassName("fbut")[0].style.display = "block";
    document.getElementsByClassName("sbut")[0].style.display = "block";
    document.getElementsByClassName("tbut")[0].style.display = "none";
    document.getElementsByClassName("fobut")[0].style.display = "none";
  };

  let loginfunc = (eve) => {
    navigaetee("/login");
  };

  let signupfunc = (eve) => {
    navigaetee("/signup");
  };

  let logoutfunc = () => {
    navigaetee("/");
    dispsec();
  };

  let dashfunc = () => {
    navigaetee("/dashboard");
    dispsec();
  };

  return (
    <>
      <nav className="flex justify-between items-center w-[80%] m-auto">
        <div>
          <NavLink to="/">
            <img src={LogoImg} alt="" />
          </NavLink>
        </div>
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
        <div className="flex  font-bold">
          <button className="mr-4 p-4 fbut" onClick={loginfunc}>
            Login
          </button>
          <button className="mr-4  p-4 sbut" onClick={signupfunc}>
            SignUp
          </button>
          <button
            className=" mr-4  p-4  tbut"
            onClick={logoutfunc}
            style={{ display: "none " }}
          >
            Logout
          </button>
          <button
            className="mr-4  p-4 fobut"
            style={{ display: "none " }}
            onClick={dashfunc}
          >
            Dashboard
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/login"
          element={
            <Login
              // setLogin={setLogin}
              dispmain={() => dispmain}
              // setSignup={setSignup}
            />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Signup
              // setLogin={setLogin}
              dispmain={() => dispmain}
              // setSignup={setSignup}
            />
          }
        ></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
