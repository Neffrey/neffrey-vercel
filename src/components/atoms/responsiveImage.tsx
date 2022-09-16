// LIBRARIES
import React from "react";
import Image from "next/image";

// COMPONENTS
import addClassName from "components/hooks/addClassName";

// PROPS
interface responsiveImageProps {
  aspectRatio: string;
  alt: string;
  className?: string;
  src: string;
  unit?: string;
  width: number;
}

// FC
const ResponsiveImage = ({
  aspectRatio,
  alt,
  className = "",
  src,
  unit = "",
  width,
}: responsiveImageProps) => {
  // aspectRatio MUST have a / in its string
  const aspectX =
    aspectRatio.indexOf("/") >= 0
      ? parseInt(aspectRatio.slice(0, aspectRatio.indexOf("/")))
      : 0;
  const aspectY =
    aspectRatio.indexOf("/") >= 0
      ? parseInt(aspectRatio.slice(aspectRatio.indexOf("/") + 1))
      : 0;

  const floorTo2Dec = (number: number) => {
    return Math.floor(number * 100) / 100;
  };

  const calcHeight = () => {
    return floorTo2Dec((aspectY / aspectX) * width).toString() + unit;
  };
  const calcWidth = () => {
    return floorTo2Dec(width).toString() + unit;
  };

  return (
    <div className={"block h-full w-full" + addClassName(className)}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={calcWidth()}
        height={calcHeight()}
      />
    </div>
  );
};

export default ResponsiveImage;
