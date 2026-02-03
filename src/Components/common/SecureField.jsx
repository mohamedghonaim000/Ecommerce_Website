import React from "react";
import FormField from "./FormField";

export default function SecureField({
  label,
  type = "password",
  value,
  onChange,
  placeholder = "Enter your password",
  required = false,
}) {
  return (
    <FormField
      label={label}
      type={type}
      placeholder={placeholder}
      rightElement={<p>Eye</p>}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
