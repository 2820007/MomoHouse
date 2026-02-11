import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully 🎉");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Create an account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Start your journey with us
          </p>
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center cursor-pointer gap-2 border rounded-lg py-2 hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5"
            alt="google"
          />
          <span className="text-sm font-medium text-gray-600">
            Continue with Google
          </span>
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-2 text-xs text-gray-400">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition font-medium"
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
