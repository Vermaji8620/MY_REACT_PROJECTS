import React from "react";
import SignupImg from "../assets/signup.png";
import { useNavigate } from "react-router-dom";

const Signup = ({ setLogin, setSignup, dispmain }) => {
  let navi = useNavigate();

  let subform = (ev) => {
    // setLogin("logout");
    // setSignup("Dashboard");
    navi("/dashboard");
    ev.preventDefault();
  };
  return (
    <>
      <div className="w-full  bg-black text-white h-[100vh] flex">
        <form className="w-1/2  flex justify-end" onSubmit={subform}>
          <div className="w-[60%] flex flex-col m-auto text-left gap-8">
            <div className="font-bold text-3xl">
              <h2>
                Join the millions learning to code with StudyNotion for free
              </h2>
            </div>
            <div>
              <h3>Build skills for today, tomorrow and beyond</h3>
            </div>
            <div className="italic">
              <h5>Education to future proof your career</h5>
            </div>
            <div className="flex gap-4 ">
              <button className="bg-gray-500 p-2 rounded-md">Student</button>
              <button className="bg-gray-500 p-2 rounded-md">Instructor</button>
            </div>
            <div className="flex ">
              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="fname"
                  className="bg-gray-400 rounded-sm"
                  placeholder="enter first name"
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  className="bg-gray-400 rounded-sm"
                  placeholder="enter last name"
                />
              </div>
            </div>
            <div className="flex flex-col w-[92%]">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                name="signupmail"
                className="bg-gray-400 rounded-sm"
                placeholder="enter email address"
                autoComplete="username"
              />
            </div>
            <div className="flex">
              <div>
                <label htmlFor="">Create password</label>
                <input
                  type="password"
                  name="signupass"
                  className="bg-gray-400 rounded-sm"
                  placeholder="Enter password"
                  autoComplete="new-password"
                />
              </div>
              <div>
                <label htmlFor="">Confirm password</label>
                <input
                  type="password"
                  name="signupassconfirm"
                  className="bg-gray-400 rounded-sm"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
              </div>
            </div>
            <div className=" bg-yellow-200 p-2 rounded-sm text-black text-center">
              <button type="submit" onClick={dispmain()}>
                Create Account
              </button>
            </div>
            <div className="text-center  font-bold">Sign in With Google</div>
          </div>
        </form>
        <div className="w-1/2  m-auto flex justify-center">
          <img src={SignupImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Signup;
