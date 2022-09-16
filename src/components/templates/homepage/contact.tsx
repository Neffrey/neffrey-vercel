// LIBRARIES
import React, { useState } from "react";

// COMPONENTS
import ContactForm from "components/organisms/contactForm";
import FormMessageSent from "components/molecules/formMessageSent"

// FC
const HomeContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFormSubmitted = () => {
    setFormSubmitted(!formSubmitted);
  };

  return (
    <div
      // Row container
      id="contact"
      className="flex min-w-full flex-col items-center justify-center p-20"
    >
      <div
        // Text box container
        className="max-w-[70vw] rounded-lg bg-black/50 p-12"
      >
        <div className="grid-col-1 grid justify-items-center gap-10 lg:grid-cols-2">
          <div className="flex max-w-lg flex-col">
            <h2 className="mb-10 text-center text-5xl lowercase">
              Get In Touch
            </h2>
            <div className="p-2" />
            <p className="text-base">
              Currently I not offering design and development services. I want
              any time spent on graphic art and web development to be on my own
              projects.
            </p>
            <div className="p-2" />
            <p className="text-base">
              There are many beautiful ideas in my head. I want to see some of
              them actually get made.
            </p>
            <div className="p-2" />
            <p className="text-base">
              If you do have a project that you reeaaallyyy want my help with
              and you are prepared to pay BIG BUCKS then send me a message and
              I’ll get back to you as soon as I can.
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            {!formSubmitted && (
              <ContactForm toggleFormSubmitted={() => toggleFormSubmitted()} />
            )}
            {formSubmitted && (
              <FormMessageSent className="text-center text-md" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeContact;
