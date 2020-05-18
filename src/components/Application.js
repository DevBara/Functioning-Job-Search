import React, {useContext} from "react";
import { UserContext } from "../providers/UserProvider"
import { Router } from "@reach/router";
import SignIn from './SignIn'
import SignUp from './SignUp'


//Hosts Signin & Sign Out components

function Application(){
    const user = useContext(UserContext);

    return(
        <Router className="app-sig-in-sign-out">
            <SignUp path ="signup" />
            <SignIn path ="/" />
        </Router>
    )
}


export default Application;