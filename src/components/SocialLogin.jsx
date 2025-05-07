import React, { useContext } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../Provider/AuthProvider'
import { useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import toast from 'react-hot-toast';

const SocialLogin = () => {
  const {googleSignIn, githubSignIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      const user = result.user;
      if(!user.emailVerified){
        sendEmailVerification(user).then(()=>{
          toast.success('Verification email sent!');
        });
      }
      toast.success('Logged in with Google!');
      navigate('/');
    })
    .catch(error =>{
      toast.error(error.message);
    })
  }


  const handleGithubSignIn = () =>{
    githubSignIn()
    .then(result =>{
      const user = result.user;
      toast.success('Logged in with Google!');
      navigate('/');
    })
    .catch(error =>{
      toast.error(error.message);
    })
  }

  return (
    <div>
        <h2 className='font-bold text-xl text-[#403F3F] py-5'>Login With</h2>
        <div className='flex flex-col gap-2 text-sm'>
            <button
            onClick={handleGoogleSignIn} 
             className='text-blue-500 border border-solid border-blue-500 p-3 rounded-lg flex items-center gap-2 justify-center'>
                <FaGoogle></FaGoogle><p >  Login with Google</p>
            </button>
            <button
            onClick={handleGithubSignIn}
             className='text-gray-600 border border-solid border-gray-600 p-3 rounded-lg flex items-center justify-center gap-2'>
                <FaGithub></FaGithub>
                <p>  Login with Github</p>
            </button>
        </div>
    </div>
  )
}

export default SocialLogin;