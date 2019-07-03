import React from 'react';
import {MainWindowTemplate, SideWindowTemplate, WindowWrapper, Window} from '../styles/Windows'
import styled from 'styled-components';
import SubmitButton from '../styles/SubmitButton';
import theme from '../utils/theme';
import {connect} from 'react-redux'
import {showModal, hideModal} from '../actions/actionCreators/modal';
import * as MODALS from '../constants/modalTypes';
import TempLatestHubs from '../components/Temp/TempLatestHubs';
const Wrapper = styled.div`
    width:100vw;
    display:flex;
    justify-content:center;
`


const Dashboard = props => {

    const showCreateHubModal = () => {
        props.showModal(MODALS.CREATE_HUB, {
            bookmark: true,
            closeButton: true
        })
        }

    return(
        <Wrapper>
            <WindowWrapper>
                <MainWindowTemplate>
                <Window theme={{height: '400px'}}></Window>

                <Window></Window>

                <Window></Window>

                </MainWindowTemplate>
                <SideWindowTemplate>
                    <Window>
                        <SubmitButton onClick={showCreateHubModal} theme={{...theme, width: '100%'}}>Create Hub</SubmitButton>
                        <button onClick={() => props.showModal(MODALS.LOGIN, {})}>Login</button>
                    </Window>
                    <Window>
                        <TempLatestHubs></TempLatestHubs>
                    </Window>

                    <Window></Window>

                </SideWindowTemplate>
            </WindowWrapper>
            {/* <TestModal></TestModal> */}
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
        hideModal: () => dispatch(hideModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)