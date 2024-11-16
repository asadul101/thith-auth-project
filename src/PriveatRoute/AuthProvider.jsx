import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

export const AuthContex=createContext(null)
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const[loaing,ustLoading]=useState(true)
   const provider=new GoogleAuthProvider()
   const handleCreate=(email,password)=>{
      ustLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const handleLogin=(email,password)=>{
      ustLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const handleGoogle=()=>{
      ustLoading(true)
      return signInWithPopup(auth, provider)
   }
   const handleSinOut=()=>{
      ustLoading(true)
      return signOut(auth)
   }
   const profile=(name,photo)=>{
      return updateProfile(auth.currentUser,{
        displayName:name,photoURL: photo,
      })
   }

   useEffect(()=>{
     const unsubsrices=onAuthStateChanged(auth,currentUser=>{
      ustLoading(false)
        setUser(currentUser)
      })
      return ()=>{unsubsrices()}
   },[])
   const info={
      handleCreate,
      handleLogin,
      handleGoogle,
      handleSinOut,
      profile,
      user,
      loaing,
      setUser
   }
   return (
      <AuthContex.Provider value={info}>
         {children}
      </AuthContex.Provider>
   );
};

export default AuthProvider;