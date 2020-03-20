import React from 'react';
import SignIn from './Components/SignIn';
import UserTable from "./Components/UserTable";
import UserPathLocationTable from "./Components/UserPathLocationTable";
import LocationsTable from "./Components/LocationsTable";
import LocationManagerTable from "./Components/LocationManagerTable";
import Menu from "./Components/Menu";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';
function App() {
    if(window.location.href=='http://localhost:3000/'){
        window.location.href='http://localhost:3000/home';
    }
  return (
      <div>
      <Router>
        <div className="App">
       <Switch>
           <Route path="/home">
               <SignIn/>
           </Route>
           <Route path='/usertable'>
               <div>
                   <Menu/>
                   <UserTable/>
               </div>
           </Route>
           <Route path='/userpathlocation'>
               <div>
                   <Menu/>
                   <UserPathLocationTable/>
               </div>
           </Route>
           <Route path='/locations'>
               <div>
                   <Menu/>
                   <LocationsTable/>
               </div>
           </Route>
           <Route path='/locationmanager'>
               <div>
                   <Menu/>
                   <LocationManagerTable/>
               </div>
           </Route>
       </Switch>
    </div>
      </Router>
      </div>
  );


}

export default App;
