import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import UserProvider from './providers/UserProvider'
import Application from "./components/Application";
import SearchPage from "./components/SearchPage"
import Home from './components/Home';
import ProfilePage from "./components/ProfilePage";



function App() {


  return (
    <UserProvider>
      <Router>
        <div className="App">
          <nav className="navbar">
            <ul>
              <li>
                <Link className="nav" to ="/home"> Home</Link>
              </li>
              <li>
                <Link className="nav" to ="/searchpage"> Search Jobs</Link>
              </li>
              <li>
                <Link className="nav" to ="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/SearchPage" component={SearchPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </div>
     </Router>
        <Application />
    </UserProvider>
  );
}


export default App;

