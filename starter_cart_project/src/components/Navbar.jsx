import { FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo.svg";
import { NavLink } from "react-router-dom";
// import Home from "../pages/Home";

const Navbar = () => {
  return (
    <div className="bg-blue-300">
      <div className="m-auto w-9/12 flex justify-between">
        <NavLink to="/">
          <div>
            <img src={Logo} alt="images will be displayed" />
          </div>
        </NavLink>
        <div className="flex items-center gap-4">
          <p>Home</p>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
