import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user);
      alert ('You have successfully signed up');
      window.location = "https://jobsearch-fa9e6.firebaseapp.com/searchpage";
    }
    
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
  
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

    return (
        <div className="sign-up-wrapper">
        <div id="sigup-div">
            <h1 className="sign-up-title">Sign Up</h1>
            <div className ="sign-up-parent">
               {error !== null && (
                  <div className= "error">
                    {error}
            </div>
        )}

            <form className="sign-up-display-form">
                <label htmlFor ="userEmail" className="sign-up-label">
                   Email:
                </label>
                <input
                   type="email"
                   name="userEmail"
                   value={email}
                   placeholder = "user@gmail.com"
                   onChange={event => onChangeHandler(event)}
                   className="email-input"
                />
                <label htmlFor="userPassword" className="sign-up-label">
                    Password:
                </label>
                <input
                    type="password"
                    name="userPassword"
                    value={password}
                    placeholder="Create Your Password"
                    id="userPassword"
                    onChange={event => onChangeHandler(event)}
                    className="password-input"
                />
                <button className="new-user-sign-up" onClick={event => {
                    createUserWithEmailAndPasswordHandler(event,email,password);
                }}>
                    Sign Up
                </button>
            </form>
            {/* <button className="googleSignInBtn" onClick={() => {
                try{
                    signInWithGoogle();
                } catch (error){
                    console.error("Error signing in with Google", error)
                }
            }}>
                Sign in With Google
            </button> */}
            <p className="have-account">
                Already have an account? {""}
                <Link className="sign-in-link" to ="/">
                Sign in here
                </Link>
            </p>
          </div>
          </div>
        </div>
        
    )
}

export default SignUp;