import React from "react";
import loginImg from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = ({ setLogin, setSignup, signup, login }) => {
  let navi = useNavigate();
  let subform = (ev) => {
    setLogin("logout");
    setSignup("Dashboard");
    navi("/dashboard");
    toast("Logged in ");
    ev.preventDefault();
  };

  return (
    <>
      <div className="bg-black text-white w-full h-[100vh] text-center flex">
        <div className="first_half w-1/2">
          <div className="w-1/2 m-auto text-start flex flex-col">
            <h2 className="font-bold m-6 text-5xl">Welcome Back</h2>
            <p className="italic m-6">
              Build skills for today tomorrow and beyond
            </p>
            <p className="italic text-blue-700">
              {" "}
              Education to future proof your career
            </p>
            <form action="" onSubmit={subform} className="flex flex-col">
              <div className="flex flex-col m-6 ">
                <label htmlFor="">Email address</label>
                <input
                  type="email"
                  name=""
                  id="mail"
                  className="text-black bg-gray-800 p-2"
                  placeholder="enter email address"
                  autoComplete="username"
                />
              </div>
              <div className="flex flex-col m-6">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name=""
                  id="pass"
                  className="text-black bg-gray-800 p-2"
                  placeholder="enter password"
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="flex flex-col text-end">Forget Password</div>
              <div className="bg-yellow-300 text-black text-center font-bold w-[90%] m-auto">
                <button type="submit" className="rounded-lg p-2">
                  Sign In
                </button>
              </div>
              <div className="m-4 text-center">Sign in with Google</div>
            </form>
          </div>
        </div>
        <div className="second_half w-1/2  flex flex-col items-center">
          <img src={loginImg} alt="this is the text" className="w-[40%]" />
        </div>
      </div>
    </>
  );
};

export default Login;
