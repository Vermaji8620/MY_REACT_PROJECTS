import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../Context/AppContext";

const Header = () => {
  const { settingColor } = useContext(AppContext);

  return (
    <div className="fixed w-[100%] ">
      <header className="w-full flex">
        <div className="text-5xl text-center mb-16 p-5 border-b-4 w-full border-slate-500">
          CODEHELP BLOGS
        </div>
        <span className="fontt text-5xl">
          <FontAwesomeIcon
            icon={faMoon}
            className="cursor-pointer"
            onClick={() => {
              settingColor();
            }}
          />
        </span>
      </header>
    </div>
  );
};

export default Header;
