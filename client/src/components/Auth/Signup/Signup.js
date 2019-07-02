import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { signup } from "../../../actions/actionCreators/auth";
import SignupForm from "./SignupForm";
import { Wrapper, Window, LoginWrapper, LoginTitle } from "../styles";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  p {
    margin:2px;
  }
`

const Signup = props => {
  const [getState, setState] = useState({
    form: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: []
  });

  const changeForm = e => {
    console.log(getState);
    setState({ ...getState, form:{...getState.form, [e.target.name]: e.target.value }});
  };

  const onSubmit = e => {
    console.log(getState);
    props.signup(getState.form).then(res => {
      
      if(res && !res.success)
        setState({...getState, errors: res.messages})
    });
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Window>
        <LoginTitle>Signup:</LoginTitle>
        <SignupForm changeForm={changeForm} onSubmit={onSubmit}/>
        <ErrorWrapper>
          {getState.errors.map((error, index) => {
            return <p key={index} style={{color:'red'}}>{error}</p>
          })}
          </ErrorWrapper>
          <div>
          <p>
            Already have an account? <Link to="/login">Log in!</Link>
          </p>
        </div>
      </Window>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signup: form => dispatch(signup(form))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
