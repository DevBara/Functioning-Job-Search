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
      window.location = "http://localhost:3000";
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
        <div className="SignUpWrapper">
            <h1 className="SignUpTitle">Sign Up</h1>
            <div className ="SignUpParent">
               {error !== null && (
                  <div className= "error">
                    {error}
            </div>
        )}

            <form className="SignUpDisplayForm">
                <label htmlFor ="userEmail" className="SignUpLabel">
                   Email:
                </label>
                <input
                   type="email"
                   name="userEmail"
                   value={email}
                   placeholder = "user@gmail.com"
                   id="userEmail"
                   onChange={event => onChangeHandler(event)}
                   className="emailInput"
                />
                <label htmlFor="userPassword" className="SignUpLabel">
                    Password:
                </label>
                <input
                    type="password"
                    name="userPassword"
                    value={password}
                    placeholder="Your Password"
                    id="userPassword"
                    onChange={event => onChangeHandler(event)}
                    className="passwordInput"
                />
                <button className="newUserSignUp" onClick={event => {
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
            <p className="haveAccount">
                Already have an account? {""}
                <Link to ="/">
                Sign in here
                </Link>
            </p>
          </div>
        </div>
        
    )
}

export default SignUp;