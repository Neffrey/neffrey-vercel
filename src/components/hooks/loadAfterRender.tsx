// LIBRARIES
import React, { useEffect, useState } from "react";

// PROPS
interface OnRenderProps {
  children: React.ReactNode;
}

// FC
const OnRender = ({ children }: OnRenderProps) => {
  // State
  const [rendered, setRendered] = useState(false);

  // Helpers
  const render = () => {
    setRendered(true);
  };

  // Effect
  useEffect(() => {
    render();
  }, []);
  return <>{rendered && children}</>;
};
export default OnRender;
