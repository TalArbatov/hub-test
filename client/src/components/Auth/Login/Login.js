import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoginTitle, Window, Wrapper } from "../styles";
import FacebookComponent from "./FacebookComponent";
import GoogleComponent from "./GoogleComponent";
import LocalForm from "./LocalForm";
import {push} from 'connected-react-router'
import { connect } from "react-redux";
import {login} from '../../../actions/actionCreators/auth'
import {Link} from 'react-router-dom';

const Login = props => {
  const [getState, setState] = useState({
    email: "",
    password: "",
    response: ''
  });

  const changeForm = e => {
    //props.push('/test')
    setState({ ...getState, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const response = await props.login(getState);
    console.log(response)
    if(!response.success)
      setState({...getState, response: response.message})
    else {
      setState({...getState, response: ''})
      props.push('/after-login')
    }
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
      <Window>
        <div>
          <LoginTitle>Login</LoginTitle>
        </div>
        <LocalForm onSubmit={onSubmit} changeForm={changeForm} response={getState.response}/>
        <FacebookComponent response={facebookResponse} />
        <GoogleComponent response={googleResponse} failure={onGoogleFailure} />
        <div>
          <p>Don't have an account? <Link to='/signup'>Signup!</Link></p>
        </div>

      </Window>

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
    push: (path) => dispatch(push(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
