// LIBRARIES
import React from "react";
// import { FaBars } from "react-icons/fa";

// // COMPONENTS
import NeffreyLogo from "components/atoms/neffreyLogo";

// Component Function
const Header: React.FC = () => {
  return (
    <div
      // Row Container
      className="flex w-full items-center justify-between border-b-4 border-solid border-neutral bg-gradient-to-r from-secondary-focus via-primary to-success px-5 py-2 shadow-xl"
    >
      {/* LOGO CONTAINER */}
      <div className="y-12 w-12 cursor-pointer fill-white">
        <NeffreyLogo />
      </div>

      {/*** TODO: MENU COMPONENT ***/}

      {/* <div className="flex justify-end"> */}
      {/* <AccountBtn />
        <DarkModeToggleBtn /> */}
      {/* <label
          // Open theme Drawer Btn
          htmlFor="theme-drawer"
          className="drawer-button cursor-pointer text-3xl text-black/75 transition ease-linear hover:scale-125"
          style={{ transitionProperty: "all" }}
        >
          <FaBars />
        </label>
      </div> */}
    </div>
  );
};
export default Header;
