import axios from 'axios'
import setAuthorizationToken from './setAuthorizationToken';
import {dispatch} from 'redux';
import store from '../index';
import {loginSuccess} from '../actions/actionCreators/auth'

const onAppStart = () => {
    console.log(`TOKEN \n ${localStorage.token}`);
    const token = localStorage.getItem('token');
    if(token && token !== '') {
      setAuthorizationToken(localStorage.token);
      //get new token from server
      axios.get('/api/auth/me/from/token').then(res => {
        const {token, user} = res.data
        console.log(res.data);
        //set new token
        setAuthorizationToken(token);
        store.dispatch(loginSuccess(user, token))
      })
    }
}

export default onAppStart;