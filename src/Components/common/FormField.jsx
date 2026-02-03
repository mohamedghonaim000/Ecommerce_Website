import { forwardRef } from "react";

const FormField = forwardRef(
  ({ label, type, placeholder, rightElement, ...props }, ref) => {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>

        <div className="relative">
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...props}
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
            focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition"
          />

          {rightElement && (
            <div className="absolute inset-y-0 right-3 flex items-center">
              {rightElement}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default FormField;
