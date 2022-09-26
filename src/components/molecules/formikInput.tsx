// LIBRARIES
import React from "react";
import { useField } from "formik";

// COMPONENTS
import addClassName from "components/hooks/addClassName";

// PROPS
interface FormikInputProps {
  name: string;
  label?: string;
  className?: string;
  errorClassName?: string;
  labelClassName?: string;
  placeholder?: string;
}

// FC
const FormikInput = ({
  name,
  label = "",
  className = "",
  errorClassName = "",
  labelClassName = "",
  placeholder = "",
}: FormikInputProps) => {
  // Connect Formik
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col justify-start">
      {/* ToDo: Error Handling
        <div className="mb-1 text-error">{meta.error}</div> */}
      <label htmlFor={name} className={"w-full" + addClassName(labelClassName)}>
        {!label ? name : label}
      </label>
      <div className="p-2" />
      <input
        className={
          "w-full" +
          addClassName(className) +
          (meta.error && meta.touched ? addClassName(errorClassName) : "")
        }
        placeholder={placeholder}
        type="text"
        {...field}
      />
    </div>
  );
};

export default FormikInput;
