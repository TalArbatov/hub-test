import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/actionCreators/auth";
import Pages from "./Pages";
import Logo from "./Logo";
import UserActions from "./UserActions";
const NavbarStyle = styled.div`
  background: ${props => props.theme.colors.primary};
  font-family: Gisha;
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0;
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  li {

    line-height: 50px;
    display: inline-block;
    transition:0.3s;
    &:hover {
        background: ${props => props.theme.colors.primaryHover}
    }
  }
  
  ul {
    margin: 0;
    padding: 0 20px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  a,
  p {
    padding: 0 8px;

    line-height: 50px;
    margin: 0;
    color: #efefef;
    text-decoration: none;
    height:100%;
    display:flex;
    cursor: pointer;
  }
`;

const Navbar = props => {
  return (
    <NavbarStyle>
      {/* <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/after-login'>Protected</Link></li>
                <li>{props.authReducer.authenticated ? <p>Hello {props.authReducer.user.email}</p> : <p>Logged out</p>}</li>
                <li><p onClick={props.logout}>Logout</p></li>
            </ul> */}
      <div>
        <Logo />
        <Pages />
      </div>
      <div>
        <UserActions />
      </div>
    </NavbarStyle>
  );
};

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer
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
)(Navbar);
