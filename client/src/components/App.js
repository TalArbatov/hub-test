import React, { useEffect } from "react";
import axios from "axios";
import Signup from "./Auth/Signup";

import ProtectedButton from "./ProtectedButton";
//import utils from "../utils";
import CheckAuth from "./CheckAuth";
import onAppStart from "../utils/onAppStart";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dashboard from "../containers/Dashboard";

import LoginContainer from "../containers/LoginContainer";
import SignupContainer from '../containers/SignupContainer'

class App extends React.Component {
  componentDidMount() {
    onAppStart();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {/* <Route exact path='/' component={Login}/> */}
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/after-login" component={ProtectedButton} />
          <Route exact path="/signup" component={SignupContainer} />

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
