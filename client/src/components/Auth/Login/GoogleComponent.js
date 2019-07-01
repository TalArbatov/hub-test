import React from "react";
import styled from 'styled-components'
import { GoogleLogin } from "react-google-login";


const LoginWrapper = styled.div`
  button {
    box-sizing: border-box;
    position: relative;
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #fff;

    &:before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 34px;
      height: 100%;
    }
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
    }
  }
`;
const GoogleButton = styled.button`
  background: #dd4b39;

  &:before {
    border-right: #bb3f30 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png") 6px 6px
      no-repeat;
  }
  &:hover,
  &:focus {
    background: #e74b37;
  }
`;

const GoogleComponent = props => {
    return(
        <div>
        <GoogleLogin
          clientId={"957424171854-chi7282in4nd51cpft17fcd1rtpv9rsq.apps.googleusercontent.com"}
          buttonText="Login with Google"
          onSuccess={props.response}
          autoLoad={false}
          onFailure={props.failure}
          render={renderProps => (
            <LoginWrapper><GoogleButton onClick={renderProps.onClick}>Login with Google</GoogleButton></LoginWrapper>
          )}
        />
      </div>
    )
}

export default GoogleComponent;