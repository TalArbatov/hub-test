import React, { useEffect, useState } from "react";
import axios from "axios";
import utils from "../../../utils";
import { LoginTitle, Window, Wrapper } from "../styles";
import FacebookComponent from "./FacebookComponent";
import GoogleComponent from "./GoogleComponent";
import LocalForm from "./LocalForm";
import {push} from 'connected-react-router'
import { connect } from "react-redux";
import {login} from '../../../actions/actionCreators/auth'
const Login = props => {
  const [getState, setState] = useState({
    email: "",
    password: ""
  });

  const changeForm = e => {
    setState({ ...getState, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.login(getState)
  };

  const facebookResponse = response => {
    console.log(response.accessToken);
    axios
      .get(`/api/auth/facebook-token?access_token=${response.accessToken}`)
      .then(res => {
        console.log(res.data);
        utils.setAuthorizationToken(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const googleResponse = response => {
    console.log(response.accessToken);
    axios
      .get(`/api/auth/google-token?access_token=${response.accessToken}`)
      .then(res => {
        console.log(res.data);
        utils.setAuthorizationToken(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const onGoogleFailure = test => {
    console.log(test);
  };
  return (
    <Wrapper>
      <Window>
        <div>
          <LoginTitle>Login</LoginTitle>
        </div>
        <LocalForm onSubmit={onSubmit} changeForm={changeForm} />
        <FacebookComponent response={facebookResponse} />
        <GoogleComponent response={googleResponse} failure={onGoogleFailure} />
        <button
        onClick={() => {
        props.push("/after-login");
        }}
      />

      </Window>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (form) => dispatch(login(form)),
    push: () => dispatch(push())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
