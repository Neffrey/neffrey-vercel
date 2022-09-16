// LIBRARIES
import React from "react";

// COMPONENTS
import ResponsiveImage from "components/atoms/responsiveImage";

// FC
const HomeGraphicDesign: React.FC = () => {
  return (
    <div
      // Row container
      id="graphic-design"
      className="grid min-w-full grid-cols-1 justify-items-center bg-base-100 py-20 px-8 lg:grid-cols-2 xl:grid-cols-9"
    >
      <ResponsiveImage
        aspectRatio="4/3"
        alt="Forest Wolf - Graphic Art Piece by Neffrey"
        className="max-w-lg overflow-hidden rounded-lg bg-center shadow-xl lg:max-w-lg xl:col-span-4 xl:col-start-2 xl:mr-20"
        src="/forest_wolf.jpg"
        unit="rem"
        width={50}
      />
      <div
        // Text box container
        className="mt-10 max-w-md rounded-md bg-black/40 p-10 lg:mt-0 xl:col-span-4 xl:mr-24"
      >
        <div className="flex flex-col">
          <h3 className="text-center text-4xl lowercase">Graphic Design</h3>
          <div className="p-3" />
          <p className="text-base">
            {`Graphic design has been a hobby of mine for 15 years now. Previously
            I really enjoyed digital painting like this Forest Wolf. These types
            of projects were put on the back as most of my time in Photoshop and
            Illustrator was spent making functional art like logos and user
            interfaces. In the future I'd like to have merch with my designs for
            sale here so stay tuned.`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeGraphicDesign;
