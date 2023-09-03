import { FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [totalcart, setTotalcart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalcart(cart.length);
    // eslint-disable-next-line
  }, [cart]);

  return (
    <div className="bg-blue-300 fixed p-2 w-full">
      <div className="m-auto w-9/12 flex justify-between">
        <NavLink to="/">
          <div>
            <img src={Logo} alt="images will be displayed" />
          </div>
        </NavLink>
        <div className="flex items-center gap-4 text-3xl">
          <p>Home</p>
          <div className="relative">
            <NavLink to="/cart">
              <FaShoppingCart className="text-3xl" />
            </NavLink>
            <div className="absolute left-10 text-xl bottom-1">{totalcart}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
