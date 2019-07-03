import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchHub} from '../actions/actionCreators/hub';
import {Window, WindowWrapper, MainWindowTemplate, SideWindowTemplate} from '../styles/Windows'
import HubHeaderWindow from '../components/Hub/HubHeaderWindow';

const Wrapper = styled.div`
    width:100vw;
    display:flex;
    justify-content:center;
`


const HubContainer = props => {
    const name = props.match.params.hub
    //const {privacy, dateCreated} = props.hubReducer.hub
    const isLoading = props.hubReducer.isLoading
    const hub = props.hubReducer.hub
    useEffect(() => {
        
        props.fetchHub(name);

    }, [])
    
    if(hub) return(
        // <div>

        // <h1>Hub name: {hub.name}</h1>
        // <p>privacy: {hub.privacy}</p>
        // <p>dateCreated: {hub.dateCreated}</p>
    // </div>
    <Wrapper>
    <WindowWrapper>
        <MainWindowTemplate>
        <Window theme={{height: '400px'}}></Window>

        <Window></Window>

        <Window></Window>

        </MainWindowTemplate>
        <SideWindowTemplate>
            <Window theme={{height: 'auto'}}>
                <HubHeaderWindow name={hub.name} description={hub.description}></HubHeaderWindow>
            </Window>
            <Window>
            </Window>

            <Window></Window>

        </SideWindowTemplate>
    </WindowWrapper>
    </Wrapper>
    )

    return(
       <p>Loading...</p>
    )
}


const mapStateToProps = state => {
    return {
        hubReducer: state.hubReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
       fetchHub: (name) => dispatch(fetchHub(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HubContainer)