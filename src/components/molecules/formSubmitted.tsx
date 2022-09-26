// LIBRARIES
import React from "react";

// FC
const FormSubmitted = ({ className = "" }) => {
  return (
    <div className={className}>
      {"Your message was sent!"}
      <br />
      {"I'll try to get back to you as soon as possible"}
    </div>
  );
};
export default FormSubmitted;
