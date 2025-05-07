import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../components/firebase.init';


export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);//kaj shuru hocche emn bujhate loading true kora hoyeche
        return (
            createUserWithEmailAndPassword(auth, email, password)
        )
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            //console.log('currently logged in', currentUser);
            setUser(currentUser);
            //user peye gele
            setLoading(false);
        })//onAuthStateChanged User login/logout change detect kore
        return()=>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading, 
        createUser,
        googleSignIn, 
        githubSignIn, 
        signInUser, 
        signOutUser, 
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider