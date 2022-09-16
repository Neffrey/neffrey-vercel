// LIBRARIES
import React, { useEffect, useState } from "react";
import Link from "next/link";

// COMPONENTS
import useWindowDimensions from "components/hooks/useWindowDimensions";
import ChevronDown from "components/atoms/chevronDown";

// COMPONENT FUNCTION
const HomeHero = () => {
  const [bgImg, setBgImg] = useState("lake-flow-bw-600.jpg");
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 600 && bgImg !== "lake-flow-bw-600.jpg")
      setBgImg("lake-flow-bw-600.jpg");
    if (width > 600 && width <= 960) setBgImg("lake-flow-bw-960.jpg");
    if (width > 960 && width <= 1280) setBgImg("lake-flow-bw-1280.jpg");
    if (width > 1280) setBgImg("lake-flow-bw-1920.jpg");
  }, [bgImg, width]);

  return (
    <div
      // Row Container
      className="sm:grid-rows-7 hero relative grid min-h-[90vh] grid-cols-1 justify-items-center sm:grid-cols-7"
      style={{
        backgroundImage: `url(/${bgImg})`,
      }}
    >
      <div className="hero-overlay absolute top-0 left-0 bg-primary mix-blend-multiply" />
      <div className="bg-base-100/45 hero-overlay absolute top-0 left-0 mix-blend-multiply" />
      <div
        // Hero Card
        className="z-10 flex flex-col items-center justify-center rounded-lg bg-black/60 p-10 sm:col-span-5 sm:col-start-3 sm:row-span-5"
      >
        <Link href="./#about">
          <h1 className="cursor-pointer text-center text-5xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105 hover:text-success">
            Meet Neffrey
          </h1>
        </Link>
        <div className="p-4" />
        <Link href="/#flowarts">
          <div className="cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105 hover:text-success">
            Flow Artist
          </div>
        </Link>
        <div className="p-1" />
        <Link href="/#graphic-design">
          <div className="cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105 hover:text-success">
            Graphic Designer
          </div>
        </Link>
        <div className="p-1" />
        <Link href="/#web-developer">
          <div className="cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105 hover:text-success">
            Web Developer
          </div>
        </Link>
        <div className="p-4" />
        <button
          className="btn btn-lg border-accent-focus bg-accent-focus font-bold text-white hover:-translate-y-1 hover:scale-105 hover:border-accent-focus hover:bg-accent"
          onClick={() => console.log("Window Dims: ", width)}
        >
          Send Me A Message
        </button>
      </div>

      <div
        // Scroll down chevron
        className="absolute left-[50%-1.5rem] bottom-5 z-10 h-12 w-12 cursor-pointer fill-white text-6xl transition ease-linear hover:h-14 hover:w-14 hover:-translate-y-1 hover:scale-105 hover:fill-success"
      >
        <Link href="./#about" passHref>
          <div>
            <ChevronDown />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default HomeHero;
