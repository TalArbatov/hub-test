import React, { useEffect } from "react";
import axios from "axios";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login/Login";
import ProtectedButton from "./ProtectedButton";
//import utils from "../utils";
import CheckAuth from "./CheckAuth";
import onAppStart from "../utils/onAppStart";
import {Switch, Route} from 'react-router-dom'
class App extends React.Component {
  componentDidMount() {
    onAppStart();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/after-login' component={ProtectedButton} />
        </Switch>
        {/* <CheckAuth />
        <Signup />
        <Login />
        <ProtectedButton /> */}
      </div>
    );
  }
}
export default App;
