// LIBRARIES
import React from "react";

// COMPONENTS
import NeffreyLogo from "components/atoms/neffreyLogo";

// Component Function
const Footer: React.FC = () => {
  return (
    <div className="w-full border-t-4 border-solid border-neutral bg-gradient-to-r from-accent to-accent-focus p-4">
      <div className="flex justify-around">
        <div className="flex items-center">
          <NeffreyLogo className="w-12 fill-base-300" />
          <div className="p-2" />
          <h5 className="text-3xl font-bold lowercase text-base-300">
            Neffrey
          </h5>
        </div>
        <div className="p-4">
          <h4 className="text-center text-lg font-bold lowercase text-base-300">
            Copyright © {new Date().getFullYear()}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Footer;
