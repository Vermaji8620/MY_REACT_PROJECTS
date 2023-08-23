import React, { useState } from "react";
import SignupImg from "../assets/signup.png";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = ({ setLogin, setSignup, dispmain }) => {
  // let navi = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    signupmail: "",
    signupass: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    signupmail: "",
    signupass: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fname: "",
      lname: "",
      signupmail: "",
      signupass: "",
      signupassconfirm: "",
    };

    if (!formData.fname) {
      valid = false;
      newErrors.fname = "First name is required";
    }

    if (!formData.lname) {
      valid = false;
      newErrors.lname = "Last name is required";
    }

    if (!formData.signupmail) {
      valid = false;
      newErrors.signupmail = "Signup email is required";
    }

    if (!formData.signupass) {
      valid = false;
      newErrors.signupass = "Password is required";
    }

    if (formData.signupassconfirm !== formData.signupass) {
      valid = false;
      newErrors.signupass = "Password does not match";
    }

    setErrors(newErrors);
    return valid;
  };

  let setallthedata = (eve) => {
    setFormData((prevdata) => {
      return {
        ...prevdata,
        [eve.target.name]: eve.target.value,
      };
    });
  };

  let subform = (ev) => {
    // setLogin("logout");
    // setSignup("Dashboard");
    if (validateForm()) {
      dispmain();
    } else {
      toast("please enter credentials");
    }
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
                  onChange={setallthedata}
                  value={formData.fname}
                  placeholder="enter first name"
                />
                <p className="text-red-500">{errors.fname}</p>
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  className="bg-gray-400 rounded-sm"
                  onChange={setallthedata}
                  value={formData.lname}
                  placeholder="enter last name"
                />
                <p className="text-red-500">{errors.lname}</p>
              </div>
            </div>
            <div className="flex flex-col w-[92%]">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="signupmail"
                className="bg-gray-400 rounded-sm"
                onChange={setallthedata}
                value={formData.signupmail}
                placeholder="enter email address"
                autoComplete="username"
              />
              <p className="text-red-500">{errors.signupmail}</p>
            </div>
            <div className="flex">
              <div>
                <label htmlFor="">Create password</label>
                <input
                  type="password"
                  name="signupass"
                  className="bg-gray-400 rounded-sm"
                  onChange={setallthedata}
                  value={formData.signupass}
                  placeholder="Enter password"
                  autoComplete="new-password"
                />
                <p className="text-red-500">{errors.signupass}</p>
              </div>
              <div>
                <label htmlFor="">Confirm password</label>
                <input
                  type="password"
                  name="signupassconfirm"
                  className="bg-gray-400 rounded-sm"
                  onChange={setallthedata}
                  value={formData.signupassconfirm}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
              </div>
            </div>
            <div className=" bg-yellow-200 p-2 rounded-sm text-black text-center">
              <button type="submit">Create Account</button>
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
