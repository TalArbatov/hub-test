import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {signup} from '../../actions/actionCreators/auth';
const Signup = props => {
  const [getState, setState] = useState({
    email: "",
    password: ""
  });

  const changeForm = e => {
    setState({ ...getState, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    props.signup(getState)
    e.preventDefault();
  };

  return (
    <div>
      <h1>Signup:</h1>
      <form onSubmit={onSubmit}>
        <label>email:</label>
        <input type="text" name="email" onChange={changeForm} />

        <label>password:</label>
        <input type="password" name="password" onChange={changeForm} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signup: form => dispatch(signup(form))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
