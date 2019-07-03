import React from 'react';
import styled from 'styled-components';
import Login from '../components/Auth/Login/Login'

const Wrapper = styled.div`
    margin-top:40px;
    display:flex;
    flex-direction:row;
    justify-content:center;
`

const LoginContainer = props => {
    return(
        <Wrapper>
            <Login />
        </Wrapper>        
    )
}

export default LoginContainer;