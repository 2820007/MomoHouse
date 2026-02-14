import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";


export default function Login() {
  const { loginWithRedirect } = useAuth0();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake login (no backend)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      alert("Invalid email or password ❌");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));
    alert("Login successful ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Please sign in to your account
          </p>
        </div>

        {/* Google Login */}
        <button 
         onClick={()=>{
          loginWithRedirect()
         }}
        className="w-full  cursor-pointer flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 transition">
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
          <div className="flex-grow border-t" />
          <span className="mx-2 text-xs text-gray-400">OR</span>
          <div className="flex-grow border-t" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          {/* Extra options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>
            <span className="text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition font-medium"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
