import * as TYPES from '../../constants/actionTypes';
import axios from 'axios';
import { push } from 'connected-react-router';

export const fetchHub = name => {
    return dispatch => {
        // 1. dispatch request to reducer
        dispatch({
            type: TYPES.FETCH_HUB_REQUEST
        })
        // 2. fetch Hub
        axios.get(`/api/h/${name}`).then(res => {
            dispatch({
                type: TYPES.FETCH_HUB_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            if(err.response && err.response.status === 400)
                dispatch(push('/not-found'))
        })
    }
}



// TODO: refactor
export const fetchHubs = () => {
    return dispatch => {
        axios.get('/api/h').then(res => {
            console.log(res.data)
            dispatch({
                asyncType: 'REQUEST',
                type: TYPES.FETCH_HUBS,
                payload: res.data
            })
        })
        
    }
}



export const createHub = (form) => {
    return dispatch => {
        // TODO: client validate form
        // TODO: server validate form
        console.log('creating hub')
        return axios.post('/api/h', form).then(res => {
            console.log(res)
            const {name} = res.data;
            return {success: true}
        }).catch(err => {
            
                return {success: false, messages: err.response.data};
        })
    }
}