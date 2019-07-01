import axios from 'axios'
import setAuthorizationToken from './setAuthorizationToken';

const onAppStart = () => {
    console.log(`TOKEN \n ${localStorage.token}`);
    const token = localStorage.getItem('token');
    if(token && token !== '') {
      //setAuthorizationToken(localStorage.token);
      //get new token from server
      axios.get('/api/auth/me/from/token').then(res => {
        console.log(res.data);

        //set new token
        setAuthorizationToken(res.data.token)
      })
    }
}

export default onAppStart;