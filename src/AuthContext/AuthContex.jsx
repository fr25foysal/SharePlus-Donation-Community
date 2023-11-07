import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase.config";
import toast from "react-hot-toast";

export const authProvider = createContext()
const AuthContex = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // Toast notification
    const successNotify = (text) => toast.success(text)
    const errorNotify = (text) => toast.error(text)

    // create user by email & pass
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    // login user
    const userLogin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Google Login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // update user name
    const updateUser = (name,photoUrl)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,photoURL: photoUrl
        })
    }

    // Log out user 
    const logOut =()=>{
        return signOut(auth)
    }

    // keep the user alive on website😂
    useEffect(()=>{
        const keepAlive = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=> keepAlive
    },[])

    // sending values ✈

    const values = {
        user,loading,createUser,userLogin,updateUser,logOut,
        successNotify,errorNotify,googleLogin
    }
    return (
        <authProvider.Provider value={values}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContex;