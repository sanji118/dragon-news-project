// src/Layouts/Register.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleRegister = e =>{
    
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;

    if(!name || !photoUrl){
      toast.error('Please provide both Name and Photo URL');
      return;
    }



    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    createUser(email, password)
    .then (result =>{
      const user = result.user;
      updateProfile(user,{
        displayName: name,
        photoURL: photoUrl
      }).then(()=>{
        sendEmailVerification(user)
          .then(()=>{
            toast.success('Verification Email Sent!')
          })
          .catch(error =>{toast.error("Error sending email verification:", error)

          })
        
        
        e.target.reset();
        navigate('/');
      })
    })
    .catch(error =>{
        const errorMessage = error.message;
        //console.log(errorMessage)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center my-10">
      <div className="card w-full max-w-md shadow-xl bg-white p-8">
        <h2 className="text-center text-3xl font-bold mb-6">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label font-semibold text-gray-700 pb-2">Your Name</label>
            <input
              type="text" name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full bg-gray-50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label font-semibold text-gray-700 pb-2">Email</label>
            <input
              type="email" name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-50"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label font-semibold text-gray-700 pb-2">Password</label>
            <input
              type="password" name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-50"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label font-semibold text-gray-700 pb-2">Photo URL</label>
            <input
              type="text" name="photoUrl"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full bg-gray-50"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" required/>
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
