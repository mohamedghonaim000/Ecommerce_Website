import React, { forwardRef } from "react";
import FormField from "./FormField";

const SecureField = forwardRef(
  ({ label, type = "password", placeholder = "Enter your password", ...props }, ref) => {
    return (
      <FormField
        label={label}
        type={type}
        placeholder={placeholder}
        rightElement={<p>Eye</p>}
        ref={ref}
        {...props}
      />
    );
  }
);

export default SecureField;
