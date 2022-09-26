// LIBRARIES
import React from "react";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";

// GQL
import { SUBMIT_FORM } from "gql/submitForm";

// COMPONENTS
import FormikInput from "components/molecules/formikInput";
import FormikTextArea from "components/molecules/formikTextArea";
import FormSubmitted from "components/molecules/formSubmitted";
import ContactFormErrorSync from "components/hooks/contactFormErrorSync";

// PROPS
interface FormValuesProps {
  email: string;
  message: string;
}
export interface ErrorProps {
  id?: string | number | undefined;
  message?: string | undefined;
}

// FORM VALUES
const initialValues = {
  email: "",
  message: "",
};

// FC
const ContactForm = () => {
  const [submitFormMutation, { data, loading, error }] =
    useMutation(SUBMIT_FORM);

  if (loading) return <h3>Sending your message</h3>;

  if (data && !data.error)
    return <FormSubmitted className="flex justify-center" />;
  return (
    <div
      // contact form wrapper
      className="min-w-full"
    >
      {loading && <h3>Sending your message</h3>}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          submitFormMutation({
            variables: {
              formID: 1,
              emailID: 4,
              emailValue: values.email,
              messageID: 3,
              messageValue: values.message,
            },
          });
        }}
        validateOnChange={false}
        validationSchema={Yup.object({
          email: Yup.string()
            .email()
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
        {(props: FormikProps<FormValuesProps>) => (
          <>
            <ContactFormErrorSync
              errors={data?.error}
              setFieldError={props.setFieldError}
            />
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
                {!props.isValid &&
                  props.touched.email === true &&
                  props.touched.message === true && (
                    <div className="text-lg text-error">
                      Please complete all of the required fields
                    </div>
                  )}
                <button
                  className="btn btn-accent w-full text-lg font-semibold tracking-wider text-white"
                  type="submit"
                  // isLoading={props.isSubmitting}
                >
                  Send Message
                </button>
                {error && <>Submission error!</>}
              </div>
            </form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
