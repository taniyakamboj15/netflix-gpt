import React, { useRef, useState } from 'react';
import Header from './Header';
import { BACKGROUNDIMAGE } from '../utils/constants';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [IsSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const username = useRef();

    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        let name = "Default"
       

        console.log("entered email is ", email);
        console.log("entered password is ", password);

        const message = checkValidData(email, password);
        setErrorMessage(message);
        if (message) return;

        if (!IsSignInForm) {
           name = username.current.value;
          if (!username.current || !username.current.value) {
            setErrorMessage("Please enter your full name.");
            return;
        }

            // Sign up logic
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log("User signed up:", user);

                    // Attempt to update profile
                    console.log("Attempting to update profile...");
                    updateProfile(user, {
                        displayName: name, 
                        photoURL: USER_AVATAR
                    })
                    .then(() => {
                        // After the profile is updated
                        console.log("Profile successfully updated!");
                        const { uid, email, displayName, photoURL } = user;
                        dispatch(addUser({ uid, email, displayName, photoURL }));
                    })
                    .catch((error) => {
                        // Error updating profile
                        console.error('Error updating profile:', error);
                        setErrorMessage(`Error updating profile: ${error.message}`);
                    });
                })
                .catch((error) => {
                    // Error signing up
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error signing up:", errorCode, errorMessage);
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });

        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("reply from login logic ", user);
                    // You can add any additional logic here after sign-in (e.g., navigation)
                })
                .catch((error) => {
                    // Error signing in
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error signing in:", errorCode, errorMessage);
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        }
    }

    const handlerbutton = () => {
        setIsSignInForm(!IsSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BACKGROUNDIMAGE} alt="backgroundimage" className="w-screen h-screen sm:h-full  object-cover" />
            </div>
            <div>
                <form onSubmit={(e) => e.preventDefault()} className="absolute w-[90%] md:w-4/12 p-12 my-60 mx-auto right-0 left-0 bg-black flex flex-col bg-opacity-80 gap-5">
                    <h1 className="text-white text-xl p-4">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
                    <input className="py-3 bg-gray-300" type="text" placeholder="Email" ref={emailRef} />
                    {!IsSignInForm && (
                        <input className="py-3 bg-gray-300" type="text" placeholder="Full Name" ref={username} />
                    )}
                    <input className="py-3 bg-gray-300" type="password" placeholder="Password" ref={passwordRef} />
                    <p className="text-red-700 text-xl">{errorMessage}</p>
                    <button className="bg-red-600 text-xl text-white rounded-lg px-7 py-2" onClick={handleLogin}>{IsSignInForm ? "Sign In" : "Sign Up"}</button>
                    <p className="text-white py-2 cursor-pointer" onClick={handlerbutton}>{IsSignInForm ? "New to Netflix? Sign up now" : "Already have an account? Sign In Now"}</p>
                </form>
            </div>
        </div>
    )
}

export default Login;
