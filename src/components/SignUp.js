import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
      alert ('You have successfully signed up');
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

    return (
        <div className="SignUpWrapper">
            <h1 className="SignUpTitle">Sign Up</h1>
            <div className ="SignUpChild">
               {error !== null && (
                  <div className= "error">
                    {error}
            </div>
        )}

            <form className="displayForm">
                <label htmlFor ="displayName" className="SignUpLabel">
                   Display Name:
                </label>
                <input
                   type="text"
                   name="displayName"
                   value={displayName}
                   placeholder = "Display Name"
                   id="displayName"
                   onChange={event => onChangeHandler(event)}
                />
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
                />
                <button className="newUser" onClick={event => {
                    createUserWithEmailAndPasswordHandler(event,email,password);
                }}>
                    Sign Up
                </button>
            </form>
            <button onClick={() => {
                try{
                    signInWithGoogle();
                } catch (error){
                    console.error("Error signing in with Google", error)
                }
            }}>
                Sign in With Google
            </button>
            <p className="text-center my-3" >
                Already have an account? {""}
                <Link to ="/" className="text-blue-500 hover: text-blue-600">
                Sign in here
                </Link>
            </p>
          </div>
        </div>
    )
}

export default SignUp;