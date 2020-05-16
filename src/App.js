import React from 'react';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import SearchPage from "./components/SearchPage"


import './App.css';

function App() {
  return (
    <div className="App">
    <SignIn />
    <SignUp />
    <SearchPage />
    
    </div>
  );
}

export default App;
