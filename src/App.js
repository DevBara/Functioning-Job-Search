import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import UserProvider from './providers/UserProvider'
import Application from "./components/Application";
import SearchPage from "./components/SearchPage"
import ProfilePage from "./components/ProfilePage";
import "./styles/Navigation.scss"
import "./styles/ProfilePage.scss"
import "./App.css"

function App() {


  return (
    <UserProvider>
      <Router>
        <div className="App">
          <nav className="nav-bar">
            <ul id="nav-ul">
              <li>
                <Link className="link" to ="/searchpage"> Search Jobs</Link>
              </li>
              <li>
                <Link className="link" to ="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <Switch>
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