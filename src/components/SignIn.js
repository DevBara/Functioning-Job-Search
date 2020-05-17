import firebase from "firebase/app";
import React, {useState} from "react";
import {Link} from "@reach/router";
import {signInWithGoogle } from "../firebase";
import {auth} from "../firebase";


 
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event, email,password) => {
                event.preventDefault();
            }


            //event to handle user input
        const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name === 'userEmail'){
            setEmail(value);
        } else if (name === 'userPassword'){
            setPassword(value);
        }

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            // let errorCode = error.code;
            console.log(error.Message);
    
        });
    
        firebase.auth().onAuthStateChanged(name => {
            if(name === 'userEmail' && name === 'userPassword') {
              window.location = 'home.js'; //After successful login, user will be redirected to home.html
            }
          });
    };

  
    


    return (

        <div>
            <h1>Sign In</h1>
            <div className="border">
            {error !== null && <div>{error}</div>}
                <form className="signInForm">
                    <label htmlFor="userEmail" className ="block">
                        Email:
                    </label>
                    <input
                        type ="email"
                        className="emailInput"
                        name="userEmail"
                        value= {email}
                        placeholder="user@gmail.com"
                        id="userEmail"
                        onChange = {(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
                    </label>
                    <input
                        type ="password"
                        className="passwordInput"
                        name="userPassword"
                        value={password}
                        placeholder ="Your Password"
                        id="userPassword"
                        onChange ={(event) => onChangeHandler(event)}
                    />

                    <button className="googleButton" onClick = {(event) => {signInWithEmailAndPasswordHandler(event,email,password)}}>
                        Sign In
                    </button>
                </form>
                    <p className="">
                        Don't Have An Account?{""}
                        <Link to ="signup">
                            Sign Up Here
                        </Link> {""}
                        <br />

                        <button className="googleButton" onClick={() => {
                            signInWithGoogle();
                        }}>
                            Sign in with Google
                        </button>
                        {/* <Link to ="passwordRest">
                            Forgot Password?
                        </Link> */}
                    </p>
            </div>
        </div>
    );

}


export default SignIn;

