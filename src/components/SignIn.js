import React, {useState} from "react";
import {Link} from "@reach/router";
import { signInWithGoogle } from "../firebase";
import {auth} from "../firebase";


 
const SignIn = ({history}) => {
    //Sign In variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

//Firebase default variable 
    const signInWithEmailAndPasswordHandler = (event, email,password) => {
                event.preventDefault();

                auth.signInWithEmailAndPassword(email,password).then(res => {
                    if (res.user) auth.setLoggedIn(true);
                    history.push('/home')
                })
                    .catch(e => {
                    setError("Error signing in with password and email", error);
                });
            };

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

