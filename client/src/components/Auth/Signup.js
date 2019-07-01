import React, {useEffect,useState} from 'react';
import axios from 'axios';

const Signup = props => {
  const [getState, setState] = useState({
    email: '',
    password: ''
  })

  const changeForm = (e) => {
    setState({...getState, [e.target.name]: e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault()
    axios.post('/api/auth/local-signup', getState).then(res => {
      console.log(res.data)
    })
  }

  return(
    <div>
      <h1>Signup:</h1>
      <form onSubmit={onSubmit}>
      <label>email:</label>
      <input type='text' name='email' onChange={changeForm}></input>

      <label>password:</label>
      <input type='password' name='password' onChange={changeForm}></input>

      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup