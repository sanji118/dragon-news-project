import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../components/firebase.init';


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);//kaj shuru hocche emn bujhate loading true kora hoyeche
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log('currently logged in', currentUser);
            setUser(currentUser);
            //user peye gele
            setLoading(false);
        })//onAuthStateChanged User login/logout change detect kore
        return()=>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, loading, createUser, signInUser, signOutUser, 
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider