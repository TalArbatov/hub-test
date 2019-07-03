import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {fetchHubs} from '../../actions/actionCreators/hub';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'


const TempLatestHubs = props => {
    useEffect(() => {
        props.fetchHubs()
    }, [])
    const hubs = props.hubReducer.hubs;
    return(
        <div>
            <ul>
            {hubs.map((hub, index) => {
                return <li key={index}><Link to={`/h/${hub.name}`}>{hub.name}</Link></li>
            })}
            </ul>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        hubReducer: state.hubReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHubs: () => dispatch(fetchHubs())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TempLatestHubs);
