import React, { useState } from "react";
import SecureField from "../../Components/common/SecureField";
import FormField from "../../Components/common/FormField";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            SignUp{" "}
          </h2>
          
          {/* user name  */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="User Name"
              type="text"
              placeholder="Enter Your User Name .."
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />

            {/* Email Field */}
            <FormField
              label="Email"
              type="email"
              placeholder="name@example.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />

            {/* Password Field */}
            <SecureField
              label="Password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter Your Password.."
              required
            />

            {/* rePassword Field */}
            <SecureField
              label="Password"
              type="password"
              value={user.rePassword}
              onChange={(e) => setUser({ ...user, rePassword: e.target.value })}
              placeholder="Enter Your Password.."
              required
            />

            {/* signup Button */}
            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md font-semibold hover:bg-[var(--hover-color)] transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-[var(--primary-color)] hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
