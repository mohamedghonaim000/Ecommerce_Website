import { useState } from "react";
import FormField from "../../Components/common/FormField";
import SecureField from "../../Components/common/SecureField";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Login{" "}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <FormField
            label="Email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Field */}
          <SecureField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password.."
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md font-semibold hover:bg-[var(--hover-color)] transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-[var(--primary-color)] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
