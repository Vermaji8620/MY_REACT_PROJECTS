import React, { useState } from "react";

const App = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    postal: "",
  });

  let funchandler = (event) => {
    setformData((prevDataForm) => {
      return {
        ...prevDataForm,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  };

  let submittingform = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full">
      <form
        action=""
        className="flex flex-col w-[30%] m-auto"
        onSubmit={submittingform}
      >
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="enter first name"
            className="border"
            onChange={funchandler}
            value={formData.firstName}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="enter last name"
            className="border"
            onChange={funchandler}
            value={formData.lastName}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
            className="border"
            onChange={funchandler}
            value={formData.email}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id=""
            onChange={funchandler}
            value={formData.country}
          >
            <option value="India">India</option>
            <option value="Morocco">Morocco</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
          </select>
          <br />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="street_address">Street Address</label>
          <input
            type="text"
            name="address"
            id="street_address"
            placeholder="1234 province "
            className="border"
            onChange={funchandler}
            value={formData.address}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Asansol"
            className="border"
            onChange={funchandler}
            value={formData.city}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="state">State / Province</label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="West Bengal"
            className="border"
            onChange={funchandler}
            value={formData.state}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="zip">ZIP / Postal Code</label>
          <input
            type="text"
            name="postal"
            id="zip"
            placeholder="West Bengal"
            className="border"
            onChange={funchandler}
            value={formData.postal}
          />
        </div>
        <br />
        <div>
          <label htmlFor="moding">
            Push Notifications <br />
            <span className="">These are delevered via SMS to your phone</span>
          </label>
          <div className="flex flex-col">
            Everything
            <input
              type="radio"
              name="mode"
              id="moding"
              onChange={funchandler}
              value="everything"
              checked={formData.mode === "everything"}
            />
            Same as email
            <input
              type="radio"
              name="mode"
              id="moding"
              onChange={funchandler}
              value="same as email"
              checked={formData.mode === "same as email"}
            />
            No push Notifications
            <input
              type="radio"
              name="mode"
              id="moding"
              onChange={funchandler}
              value="no push notifications"
              checked={formData.mode === "no push notifications"}
            />
          </div>
        </div>
        <div>
          <button className="bg-slate-600 pl-6 pr-6 pt-2 pb-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
