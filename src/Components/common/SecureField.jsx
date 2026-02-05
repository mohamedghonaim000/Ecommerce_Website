import React, { forwardRef } from "react";
import { FaEye } from "react-icons/fa";
import FormField from "./FormField";



const SecureField = forwardRef(
  ({ label, type = "password", placeholder = "Enter your password", ...props }, ref) => {
    return (
      <FormField
        label={label}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);

export default SecureField;
