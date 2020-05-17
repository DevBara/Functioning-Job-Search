import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import UserProvider from './providers/UserProvider'
import Application from "./components/Application";
import SearchPage from "./components/SearchPage"
import Home from './components/Home';



function App() {


  return (
    <UserProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link className="" to ="/Home"> Home</Link>
              </li>
              <li>
                <Link className="" to ="/searchpage"> Search Jobs</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/SearchPage" component={SearchPage} />
          </Switch>
        </div>
     </Router>
     <Application />
    </UserProvider>

  );
}


export default App;