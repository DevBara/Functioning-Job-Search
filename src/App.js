
import React from "react";
import UserProvider from './providers/UserProvider'
import Application from "./components/Application";

import React from 'react';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import SearchPage from "./components/SearchPage"



function App() {


  return (
    <UserProvider>
      <Application />
   
    <div className="App">
      <SignIn />
      <SignUp />
      <SearchPage />
    
    </div>
    </UserProvider>

  );
}





export default App;