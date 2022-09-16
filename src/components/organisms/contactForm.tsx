// LIBRARIES
import React from "react";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

// COMPONENTS
import FormikInput from "components/molecules/formikInput";
import FormikTextArea from "components/molecules/formikTextArea";

// PROPS
interface ContactFormProps {
  toggleFormSubmitted: () => void | undefined;
}

// FORM VALUES TYPES
interface FormValuesTypes {
  email: string;
  message: string;
}

// FORM VALUES
const initialValues = {
  email: "",
  message: "",
};

// COMPONENT FUNCTION
const ContactForm = ({ toggleFormSubmitted }: ContactFormProps) => {
  return (
    <div
      // contact form wrapper
      className="min-w-full"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log("Contact Form Submission", { values, actions });
          actions.setSubmitting(false);
          toggleFormSubmitted();
          actions.resetForm();
        }}
        validateOnChange={false}
        validationSchema={Yup.object({
          email: Yup.string()
            .min(5, "Please enter the email address you want me to reply to")
            .max(30, "Must be 30 characters or less")
            .required("Field is Required"),
          message: Yup.string()
            .min(
              5,
              "Please send me a quick message and I'll get back to you via email"
            )
            .max(100, "Must be 100 characters or less")
            .required("Field is Required"),
        })}
      >
        {(props: FormikProps<FormValuesTypes>) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col justify-start">
              <FormikInput
                name="email"
                label="Email address"
                placeholder="Enter email address"
                className="rounded-md p-2 text-base text-black placeholder-black/80"
                errorClassName="shadow-[inset_0_0_5px_3px] shadow-error"
                labelClassName="text-2xl lowercase tracking-wider"
              />
              <div className="p-2" />
              <FormikTextArea
                name="message"
                label="Message"
                placeholder="Send me a quick message letting me know what you wanna chat about. I'll get back to ya :)"
                className="rounded-md p-2 text-base text-black placeholder-black/80"
                errorClassName="shadow-[inset_0_0_5px_3px] shadow-error"
                labelClassName="text-2xl lowercase tracking-wider"
              />
              <div className="p-4" />
              {/* {!props.isValid && (
                <div className="bg-warning text-base">
                  Please complete all of the required fields above.
                </div>
              )} */}
              <button
                className="btn btn-accent w-full text-lg font-semibold tracking-wider text-white"
                type="submit"
                // isLoading={props.isSubmitting}
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
