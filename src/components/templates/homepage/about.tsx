// LIBRARIES
import React from "react";

// COMPONENTS
import ResponsiveImage from "components/atoms/responsiveImage";

// FC
const HomeAbout = () => {
  return (
    <div
      // Row container
      id="about"
      className="grid min-w-full grid-cols-1 justify-items-center bg-base-100 py-20 px-8 lg:grid-cols-2 xl:grid-cols-7"
    >
      <ResponsiveImage
        aspectRatio="3/4"
        alt="Selfie of Neffrey"
        className="max-w-xs overflow-hidden rounded-lg bg-center shadow-xl lg:max-w-xs xl:col-span-2 xl:col-start-2"
        src="/selfie.jpg"
        unit="vw"
        width={20}
      />
      <div
        // Text box container
        className="mt-10 max-w-md rounded-md bg-black/40 p-10 lg:mt-0 xl:col-span-3"
      >
        <div className="flex flex-col">
          <h3 className="text-center text-4xl lowercase tracking-wider">
            About Me
          </h3>
          <div className="p-4" />
          <p className="text-base">
            At the start of 2020, I moved across the country to the Minneapolis
            MN area for a complete career change. With that change, I am no
            longer offering web development services. Nowadays you can find me
            at my job as a casino blackjack dealer, dancing around with my flow
            props, sometimes making graphic art, honing my web dev skills, and
            spending time with friends when possible!
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeAbout;
