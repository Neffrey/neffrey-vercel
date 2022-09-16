// LIBRARIES
import React from "react";
import { useField } from "formik";

// COMPONENTS
import addClassName from "components/hooks/addClassName";
// import FormFieldError from "components/molecules/formFieldError";

// PROPS
interface FormikTextAreaProps {
  name: string;
  label?: string;
  className?: string;
  errorClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  rows?: number;
  cols?: number | undefined;
}

// COMPONENT FUNCTION
const FormikTextArea = ({
  name,
  label = "",
  className = "",
  errorClassName = "",
  labelClassName = "",
  placeholder = "",
  rows = 5,
  cols,
}: FormikTextAreaProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col justify-start">
      {/* ToDo: Error Handling
        <FormFieldError error={meta.error} /> */}
      <label htmlFor={name} className={"w-full" + addClassName(labelClassName)}>
        {!label ? name : label}
      </label>
      <div className="p-2" />
      <textarea
        className={
          "w-full" +
          addClassName(className) +
          (meta.error ? addClassName(errorClassName) : "")
        }
        cols={cols}
        placeholder={placeholder}
        rows={rows}
        {...field}
      />
    </div>
  );
};

export default FormikTextArea;
