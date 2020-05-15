import React from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";

function SignInOut (){
    const user = null;
    
    return(
        user ? 
        <ProfilePage />

        :
        <Router>
            <SignUp path ="signup" />
            <SignIn path = "/" />
        </Router>
    );
}

export default SignInOut;