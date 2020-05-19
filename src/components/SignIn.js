import React, {useState} from "react";
import {Link} from "@reach/router";
import {signInWithGoogle } from "../firebase";
import {auth} from "../firebase";
import "../styles/SigninLogIn.scss"


 
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event, email,password) => {
                event.preventDefault();
                    window.location = "http://localhost:3000/home";
                  
            }

            //event to handle user input
        const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name === 'userEmail'){
            setEmail(value);
        } else if (name === 'userPassword'){
            setPassword(value);
        }
    };


    return (

        <div className="sign-in-wrapper">
            <div id="sigin-div">
            <h1 className="sign-in-title">Sign In</h1>
            <div className="sign-in-parent">
            {error !== null && <div>{error}</div>}
                <form className="sign-in-form">
                    <label htmlFor="userEmail" className ="SignInLabel">
                        Email:
                    </label>
                    <input
                        type ="email"
                        name="userEmail"
                        value= {email}
                        placeholder="user@gmail.com"
                        onChange = {(event) => onChangeHandler(event)}
                        className="email-input"
                    />
                    <label htmlFor="userPassword" className ="sign-in-label">
                        Password:
                    </label>
                    <input
                        type ="password"
                        name="userPassword"
                        value={password}
                        placeholder ="Your Password"
                        id="userPassword"
                        onChange ={(event) => onChangeHandler(event)}
                        className="password-input"
                    />

                    <button className="sign-in-btn" onClick = {(event) => {signInWithEmailAndPasswordHandler(event,email,password)}}>
                        Sign In
                    </button>
                </form>
                    <p className="need-account">
                        Don't Have An Account? {""}
                        <Link to ="signup" className="sign-up-link">
                            Sign Up Here
                        </Link> {""}
                        <br />

                        {/* <button className="googleSignInBtn" onClick={() => {
                            signInWithGoogle();
                        }}>
                            Sign in with Google
                        </button> */}
                        {/* <Link to ="passwordRest">
                            Forgot Password?
                        </Link> */}
                    </p>
                </div>
            </div>
        </div>
    );
}



export default SignIn;

