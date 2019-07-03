import styled from "styled-components";

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

const FacebookButton = styled.button`
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  text-shadow: 0 -1px 0 #354c8c;

  &:before {
    border-right: #364e92 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png") 6px 6px
      no-repeat;
  }
  &:hover,
  &:focus {
    background-color: #5b7bd5;
    background-image: linear-gradient(#5b7bd5, #4864b1);
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

///

const LoginTitle = styled.p`
  font-family:Gisha;
  font-weight:100;
  color: #2f2f2f;
  font-size: 1.3em;
  margin:0;
  margin-bottom:25px;
`
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Window = styled.div`
background: white;
  padding:25px;
  border-radius: ${props => props.theme.window.borderRadius};
  width:290px;
  border: 1px solid purple;
  display:flex;
  flex-direction:column;
  justify-content:center;
  div {
    display:flex;
    justify-content:center;
  }
`;

const SubmitDiv = styled.div`
dispay:flex;
flex-direction:row;
align-items:center;
a {
  text-decoration:none;
  font-family:Gisha;
  font-size:0.9em
  font-weight:500;
}
`



export {
    LoginWrapper, 
    FacebookButton,
    GoogleButton,
    LoginTitle,
    Wrapper,
    Window,
    SubmitDiv
}
