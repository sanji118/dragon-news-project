import { Link, useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";

import auth from "../components/firebase.init";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate();


  

  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
    .then((result)=>{
      const user = result.user;
      
      e.target.reset();
      navigate('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorMessage)
    });
  }

  return (
    <div className="min-h-screen w-1/2 mx-auto">
      
      <div class="card w-full shadow-2xl p-5 my-10">
        <h1 class="text-3xl font-bold text-center py-5">Login your account</h1>
        <div class="card-body">
          <form onSubmit={handleLogin} class="fieldset">
            <label class="label mb-2 font-semibold text-gray-600 text-lg">Email</label>
            <input type="email" name='email' class="input bg-[#F3F3F3]" placeholder="Enter your email address" />
            <label class="label mb-2 font-semibold text-gray-600 text-lg">Password</label>
            <input type="password" name="password" class="input bg-[#F3F3F3]" placeholder="Enter your password" />
            <div><a class="link link-hover font-medium text-sm">Forgot password?</a></div>
            <button class="btn btn-neutral mt-4">Login</button>
          </form>
          {/* Links */}
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/auth/register" className="font-semibold text-red-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
