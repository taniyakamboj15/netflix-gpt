import React, { useRef, useState } from 'react'
import Header from './Header'
import { BACKGROUNDIMAGE } from '../utils/constants';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';
const Login = () => {
    const [IsSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage]= useState();
    const dispatch=useDispatch();
    const emailRef = useRef();
    const passwordRef =  useRef();
    const name= useRef();
    const handleLogin=()=>{
      
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
       //const Names = name.current.value;
        console.log(email);
        console.log(password);
        const message=checkValidData(email,password);
        setErrorMessage(message);
        if(message) return;
        if(!IsSignInForm){
          createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL}  = auth.currentUser;
       dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
    
 
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    console.log(user);
  
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage);
    
  });

          
        }else{
          signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // navigate("/browse")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage);
  });
         
        }
        

    }

    const handlerbutton=()=>{
        setIsSignInForm(!IsSignInForm);

    }
  return (
    <div >
    
          <Header/>
          <div className='absolute'>
            <img src={BACKGROUNDIMAGE} alt="backgroundimage" className='w-screen h-full object-cover'></img>
          </div>
          <div >
          <form onSubmit={(e) => e.preventDefault()}className='absolute w-3/12 p-12 my-60 mx-auto right-0 left-0 bg-black flex flex-col bg-opacity-80 gap-5'>
        
            <h1 className='text-white  text-xl p-4'>{IsSignInForm? "Sign In ":"Sign Up"}</h1>
            <input className='py-3 bg-gray-300' type="text" placeholder='Email' ref={emailRef}></input>
            {!IsSignInForm &&(
            <input className='py-3 bg-gray-300' type="text" placeholder='Full Name' ref={name}></input>)}
            <input className='py-3 bg-gray-300' type="password" placeholder='Password'  ref={passwordRef}></input>
            <p className='text-red-700 text-xl'>{errorMessage}</p>
            <button className='bg-red-600 text-xl text-white rounded-lg px-7 py-2  ' onClick ={handleLogin}>{IsSignInForm? "Sign In":"Sign Up"}</button>
            <p className='text-white py-2 cursor-pointer'onClick={handlerbutton}>{IsSignInForm?"New to Netflix? Sign up now": "Already have an account ? Sign In Now"} </p>
          </form>
          </div>
    </div>
  )
}

export default Login;