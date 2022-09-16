// LIBRARIES
import React from "react";

// COMPONENTS
import ResponsiveImage from "components/atoms/responsiveImage";

// COMPONENT FUNCTION
const HomeFlowarts: React.FC = () => {
  return (
    <div
      // Row container
      id="flowarts"
      className="grid min-w-full grid-cols-1 justify-items-center bg-primary py-20 px-8 lg:grid-cols-2 lg:px-24 xl:px-40"
    >
      <ResponsiveImage
        aspectRatio="2/3"
        alt="Neffrey Spinning Poi at Konnexion festival Idaho"
        className="max-w-xs overflow-hidden rounded-lg bg-center shadow-xl lg:col-start-2 lg:row-start-1 lg:max-w-xs"
        src="/konnexion.jpg"
        unit="vw"
        width={20}
      />
      <div
        // Text box container
        className="mt-10 max-w-md rounded-md bg-black/60 p-10 lg:col-start-1 lg:row-start-1 lg:mt-0"
      >
        <div className="flex flex-col">
          <h3 className="text-center text-4xl lowercase tracking-wider">
            Flowarts <br />
            Dancing With Props
          </h3>
          <div className="p-3" />
          <p className="text-base">
            Prop-based dance, aka flowarts in my world, is what I love. It is my
            daily meditation and my favorite thing to do for fun.
          </p>
          <div className="p-1" />
          <p className="text-base">
            After being around it for just a few months, I made it a part of my
            daily life. It has been such a blessing in my life both physically
            AND mentally.
          </p>
          <div className="p-1" />
          <p className="text-base">
            {`I've already been lucky enough to perform in front of hundreds as a
            festival dancer. My goal is to one day travel around performing and
            teaching workshops at festivals.`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeFlowarts;
