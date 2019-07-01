import axios from 'axios'

const setAuthorizationToken = (token) => {
    localStorage.token = token;
    if(token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete axios.defaults.headers.common['Authorization']
  }

export default setAuthorizationToken
