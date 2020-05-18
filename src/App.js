import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import UserProvider from './providers/UserProvider'
import Application from "./components/Application";
import SearchPage from "./components/SearchPage"
import Home from './components/Home';
import ProfilePage from "./components/ProfilePage";
import "./styles/Navigation.scss"


function App() {


  return (
    <UserProvider>
      <Router>
        <div className="App">
          <nav className="nav-bar">
            <ul id="nav-ul">
              <li>
<<<<<<< HEAD
                <Link className="nav" to ="/home"> Home</Link>
              </li>
              <li>
                <Link className="nav" to ="/searchpage"> Search Jobs</Link>
              </li>
              <li>
                <Link className="nav" to ="/profile">Profile</Link>
=======
                <Link className="link" to ="/home"> Home</Link>
              </li>
              <li>
                <Link className="link" to ="/searchpage"> Search Jobs</Link>
              </li>
              <li>
                <Link className="link" to ="/profile">Profile</Link>
>>>>>>> 652d087fed49bfc9028761ebc8a16e1454aa3b31
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

