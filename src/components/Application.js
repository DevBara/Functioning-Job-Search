import React, {useContext} from "react";
import { UserContext } from "../providers/UserProvider"
import { Router } from "@reach/router";
import SignIn from './SignIn'
import SignUp from './SignUp'




function Application(){
    const user = useContext(UserContext);

    return(
        <Router>
            <SignUp path ="signup" />
            <SignIn path ="/" />
        </Router>
    )
}


export default Application;