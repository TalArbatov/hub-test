import * as TYPES from '../constants/actionTypes';

const defaultState = {
  isLoading: false,
  authenticated: false,
  user: {}
}

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case TYPES.LOGOUT:
        return {...state, authenticated: false, user: {}}
    case TYPES.LOCAL_LOGIN_REQUEST:
      return {...state, isLoading: true}
    case TYPES.LOCAL_LOGIN_ERROR:
      return {...state, isLoading: false}
    case TYPES.LOCAL_LOGIN_SUCCESS:
      return {...state, authenticated: true, user: action.payload, isLoading: false}
    default:
      return state;
  }
}

export default authReducer