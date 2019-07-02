import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/actionCreators/auth';

const NavbarStyle = styled.div`
    background:black;
    font-family:Gisha;
    width:100vw;
    height:50px;

    li {
        margin-left:15px;
        line-height:50px;
        display:inline-block;
    }
    ul {
        margin:0;
        list-style-type: none;
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
    }
    a,p {
        margin:0;
        color:#efefef;
        text-decoration:none;
    }
`

const Navbar = props => {
    return(
        <NavbarStyle>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/after-login'>Protected</Link></li>
                <li>{props.authReducer.authenticated ? <p>Hello {props.authReducer.user.email}</p> : <p>Logged out</p>}</li>
                <li><p onClick={props.logout}>Logout</p></li>
            </ul>
        </NavbarStyle>
    )
}

const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)