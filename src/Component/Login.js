import React, { useRef, useState } from 'react'
import Header from './Header'
import { BACKGROUNDIMAGE } from '../utils/constants';
import { checkValidData } from '../utils/Validate';

const Login = () => {
    const [IsSignInForm,setIsSignInForm] = useState(true);
    const emailRef = useRef();
    const passwordRef =  useRef();
    const handleLogin=()=>{
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
        console.log(email);
        console.log(password);
        const result=checkValidData(email,password);
        console.log(result);
        

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
            <input className='py-3 bg-gray-300' type="text" placeholder='Full Name'></input>)}
            <input className='py-3 bg-gray-300' type="password" placeholder='Password'  ref={passwordRef}></input>
            <button className='bg-red-600 text-xl text-white rounded-lg px-7 py-2  ' onClick ={handleLogin}>{IsSignInForm? "Sign In":"Sign Up"}</button>
            <p className='text-white py-2 cursor-pointer'onClick={handlerbutton}>{IsSignInForm?"New to Netflix? Sign up now": "Already have an account ? Sign In Now"} </p>
          </form>
          </div>
    </div>
  )
}

export default Login;