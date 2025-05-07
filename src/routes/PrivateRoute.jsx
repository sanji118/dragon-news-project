import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate } from 'react-router-dom';
//jodi user login kora thake---children component dekhabe
//na thakle----login page e pathabe
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }
    if(user) {
        return children;
    }

  return (
    <Navigate to="auth/login"></Navigate>//user jodi na thake login e pathao
  )
}

export default PrivateRoute