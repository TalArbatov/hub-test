import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logout } from "../../actions/actionCreators/auth";
import { connect } from "react-redux";
import ImageWrapper from "../../styles/ImageWrapper";

const imgSrc =
  "https://book-market-bucket.s3.eu-west-2.amazonaws.com/5cf7b79ac985b9008c370c49/ea856910-8825-11e9-980c-1b915038148b.jpeg";

const UserActions = props => {
  const LoggedIn = (
    <>
      <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <ImageWrapper>
          <img src={imgSrc} />
        </ImageWrapper>
        <p>Welcome {props.auth.user.username}</p>

      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
      <li>
        <p onClick={props.logout}>Logout</p>
      </li>
    </>
  );

  const LoggedOut = (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </>
  );

  return <ul>{props.auth.authenticated ? LoggedIn : LoggedOut}</ul>;
};

const mapStateToProps = state => {
  return {
    auth: state.authReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActions);
