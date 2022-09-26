import { useEffect } from "react";
import { gFormIds } from "gql/submitForm";
import { ErrorProps } from "components/organisms/contactForm";

interface ContactFormErrorSyncProps {
  errors: ErrorProps[] | undefined;
  setFieldError: (
    field: string,
    message: string | undefined
  ) => void | undefined;
}

const ContactFormErrorSync = ({
  errors,
  setFieldError,
}: ContactFormErrorSyncProps) => {
  useEffect(() => {
    const handleErrorSync = () => {
      if (Array.isArray(errors)) {
        errors.forEach((error: ErrorProps) => {
          if (error.id === gFormIds.email) {
            setFieldError("email", error.message);
          }
          if (error.id === gFormIds.message) {
            setFieldError("message", error.message);
          }
        });
      }
    };
    handleErrorSync();
  }, [errors, setFieldError]);

  return <></>;
};

export default ContactFormErrorSync;
