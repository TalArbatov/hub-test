import React from 'react';
import styled from 'styled-components';
import Signup from '../components/Auth/Signup/Signup';

const Wrapper = styled.div`
    margin-top:40px;
`

const SignupContainer = props => {
    return(
        <Wrapper>
            <Signup />
        </Wrapper>        
    )
}

export default SignupContainer;