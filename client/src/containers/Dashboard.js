import React from 'react';
import {MainWindowTemplate, SideWindowTemplate, WindowWrapper, Window} from '../styles/Windows'
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100vw;
    display:flex;
    justify-content:center;
`

const Dashboard = props => {
    return(
        <Wrapper>
            <WindowWrapper>
                <MainWindowTemplate>
                <Window theme={{height: '400px'}}></Window>

                <Window></Window>

                <Window></Window>

                </MainWindowTemplate>
                <SideWindowTemplate>
                    <Window></Window>
                    <Window></Window>

                    <Window></Window>

                </SideWindowTemplate>
            </WindowWrapper>
        </Wrapper>
    )
}

export default Dashboard