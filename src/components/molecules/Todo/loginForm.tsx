// LIBRARIES
import React from "react";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { Button, FormErrorMessage } from "@chakra-ui/react";

// MY COMPONENTS
import FormikInput from "components/molecules/formikInput";

// FORM VALUES &
interface ValueTypes {
  username: string;
  password: string;
}
const initialValues = {
  username: "",
  password: "",
};

// COMPONENT FUNCTION
const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log("Login Submission", { values, actions });
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(4, "Too Short!")
          .max(20, "Must be 15 characters or less")
          .required("Please enter a username or email address"),
        password: Yup.string()
          .min(8, "Too Short!")
          .max(20, "Must be 20 characters or less")
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
          .required("Please enter a password"),
      })}
    >
      {(props: FormikProps<ValueTypes>) => (
        <form onSubmit={props.handleSubmit}>
          <FormikInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username / email address"
            marginBottom={5}
            isRequired
          />
          <FormikInput
            label="Password"
            name="password"
            type="text"
            placeholder="Send a message"
            marginBottom={5}
            isRequired
          />
          {!props.isValid && (
            <FormErrorMessage marginBottom={1}>
              Please complete all of the required fields above.
            </FormErrorMessage>
          )}
          <Button
            type="submit"
            variant="cyanBtn"
            isLoading={props.isSubmitting}
            width="full"
            marginTop={2}
          >
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
