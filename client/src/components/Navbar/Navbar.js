import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavbarStyle = styled.div`
    background:black;
    font-family:Gisha;
    width:100vw;
    height:50px;

    li {
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
    a {
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
            </ul>
        </NavbarStyle>
    )
}

export default Navbar