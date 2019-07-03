import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`

const WindowHeader = styled.div`
    
    
    p {
        font-size: ${props => props.theme.window.header.fontSize};
        color: ${props => props.theme.window.header.color};  
        font-weight:800;
        margin:0;
        margin-bottom:25px;
    }
`

const HubHeaderWindow = ({name, description}) => {
    return(
        <Wrapper>
            <WindowHeader>
                <p>Hub Details:</p>
            </WindowHeader>
            <h3>Name: {name}</h3>
            <p>Description: {description}</p>
        </Wrapper>
    )
}

export default HubHeaderWindow