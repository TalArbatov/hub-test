import axios from 'axios';
import store from '../index';
import {logoutSuccess} from '../actions/actionCreators/auth'

const onLogout = () => {
    delete axios.defaults.headers.common['authorization'];
    delete localStorage.jwt
    store.dispatch({})
}

export default onLogout