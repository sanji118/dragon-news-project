// src/Layouts/Register.jsx
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center my-10">
      <div className="card w-full max-w-md shadow-xl bg-white p-8">
        <h2 className="text-center text-3xl font-bold mb-6">
          Register your account
        </h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="label font-semibold text-gray-700 pb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full bg-gray-50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label font-semibold text-gray-700 pb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-50"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label font-semibold text-gray-700 pb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-50"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label font-semibold text-gray-700 pb-2">Photo URL</label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full bg-gray-50"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
            <p className="text-sm text-gray-600">
              I accept the{" "}
              <span className="underline text-gray-800">Terms & Conditions</span>
            </p>
          </div>

          {/* Register Button */}
          <button className="btn btn-neutral w-full mt-2">Register</button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/auth/login" className="font-semibold text-green-700 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
