// LIBRARIES
import React from "react";

// MY COMPONENTS
import GraphqlLogo from "components/atoms/graphqlLogo";
import ReactJSLogo from "components/atoms/reactjsLogo";
import WordPressLogo from "components/atoms/wordpressLogo";

// COMPONENT FUNCTION
const HomeWebDevelopment = () => {
  return (
    <div
      // Row container
      id="web-developer"
      className="flex min-w-full justify-center bg-secondary px-12 py-20 sm:px-24 md:px-32 lg:px-12"
    >
      <div
        // Text box container
        className="flex flex-col items-center rounded-lg bg-black/50 p-12 lg:max-w-[65vw]"
      >
        <h2 className="text-center text-4xl tracking-wider">
          ReactJS and Wordpress
        </h2>
        <div className="p-6" />
        <p className="text-base">
          {`Speaking of my own development projects, that's where most of my
            time has been going lately. I’ve been honing my skills in the React
            ecosystem while thoroughly enjoying building my own projects like `}
          <span className="link text-warning hover:text-success">
            <a
              target="_blank"
              href="https://ndiceroller.com/"
              rel="noopener noreferrer"
            >
              ndiceroller
            </a>
          </span>
        </p>
        <div className="p-2" />
        <p className="text-base">
          {`For a while there I ended up losing my love for development and code.
          I have refound this passion after taking a big long break from it and
          only coming back to it as a hobby. I love building fun things when the
          mood for code and not building when I'm not in the mood.`}
        </p>
        <hr className="m-14 w-1/2" />
        <h3 className="text-center text-3xl lowercase">My favorite tech</h3>
        <div className="p-6" />
        <div
          // Logos Grid
          className="grid grid-cols-1 justify-items-center sm:grid-cols-1 lg:grid-cols-3 lg:gap-10"
        >
          <div
            // ReactJS Logo & Header
            className="flex flex-row items-center px-0 sm:px-3 md:px-6 lg:flex-col lg:px-0"
          >
            <div className="flex flex-col items-center">
              <div className="h-20 max-h-20 w-20 fill-white">
                <ReactJSLogo />
              </div>
              <h3 className="text-center text-xl lowercase">ReactJS</h3>
            </div>
            <div className="p-4" />
            <p className="text-base lg:text-center">
              {`The powerhouse of frontend development. ReactJS delivers fast interactive experiences for it's users.`}
            </p>
          </div>

          <div
            // WordPress Logo & Header
            className="flex flex-row-reverse items-center px-0 pt-10 sm:px-3 md:px-6 lg:flex-col lg:px-0 lg:pt-0"
          >
            <div className="flex flex-col items-center">
              <WordPressLogo className="h-20 w-20 fill-white" />
              <h3 className="text-center text-xl lowercase">WordPress</h3>
            </div>
            <div className="p-4" />
            <p className="text-right text-base lg:text-center">
              {`The powerhouse of frontend development. ReactJS delivers fast interactive experiences for it's users.`}
            </p>
          </div>

          <div
            // GraphQL Logo & Header
            className="flex flex-row items-center px-0 pt-10 sm:px-3 md:px-6 lg:flex-col lg:px-0 lg:pt-0"
          >
            <div className="flex flex-col items-center">
              <div className="h-20 max-h-20 w-20 fill-white">
                <GraphqlLogo />
              </div>
              <h3 className="text-center text-xl lowercase">GraphQL</h3>
            </div>
            <div className="p-4" />
            <p className="text-base lg:text-center">
              {`The powerhouse of frontend development. ReactJS delivers fast interactive experiences for it's users.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeWebDevelopment;
