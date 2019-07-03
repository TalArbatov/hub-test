import React, { useEffect } from "react";
import axios from "axios";
import Signup from "./Auth/Signup/Signup";

import ProtectedButton from "./ProtectedButton";
//import utils from "../utils";
import CheckAuth from "./CheckAuth";
import onAppStart from "../utils/onAppStart";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dashboard from "../containers/Dashboard";
import styled from 'styled-components'

import RootModal from '../modals/RootModal';
//import pages
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from '../containers/SignupContainer'
import HubContainer from '../containers/HubContainer';
import NotFound from './Temp/NotFound';

class App extends React.Component {
  componentDidMount() {
    onAppStart();
  }

  render() {
    return (
      <div>
                <RootModal />

        <Navbar />
        <Switch>
          
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/after-login" component={ProtectedButton} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/h/:hub" component={HubContainer} />

        </Switch>
        {/* <MyButton>My Button</MyButton> */}
        
      </div>
    );
  }
}

const MyButton = styled.button`
  background: ${props => props.theme.button.primary.bgColor}
`

export default App;
