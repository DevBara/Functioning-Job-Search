import React, {useState} from "react";
import {Link} from "@reach/router";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event, email,password) => {
                event.preventDefault();
            }
        


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
            {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
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

                    <button className="googleButton">
                        Sign In With Google
                    </button>
                </form>

                    <p className="">
                        Don't Have An Account?{""}
                        <Link to ="signup">
                            Sign Up Here
                        </Link> {""}
                        <br />
                        <Link to ="passwordRest">
                            Forgot Password?
                        </Link>
                    </p>
            </div>
        </div>
    );
};
    
    export default SignIn;

