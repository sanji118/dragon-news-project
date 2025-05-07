import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../components/_auth_";

const Login = () => {
  const provider = new GoogleAuthProvider();


  signInWithPopup(auth, provider)
  .then(result =>{
    const user = GoogleAuthProvider.credentialFromResult(result);
    const token = user.accessToken;
    
  })
  .catch(error =>{
    const errorMessage = error.messsage;
    console.log(errorMessage);
  })

  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
  }

  return (
    <div className="min-h-screen w-1/2 mx-auto">
      
      <div class="card w-full shadow-2xl p-5 my-10">
        <h1 class="text-3xl font-bold text-center py-5">Login your account</h1>
        <div class="card-body">
          <fieldset class="fieldset">
            <label class="label mb-2 font-semibold text-gray-600 text-lg">Email</label>
            <input type="email" name='email' class="input bg-[#F3F3F3]" placeholder="Enter your email address" />
            <label class="label mb-2 font-semibold text-gray-600 text-lg">Password</label>
            <input type="password" name="password" class="input bg-[#F3F3F3]" placeholder="Enter your password" />
            <div><a class="link link-hover font-medium text-sm">Forgot password?</a></div>
            <button onClick={handleLogin} class="btn btn-neutral mt-4">Login</button>
          </fieldset>
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
