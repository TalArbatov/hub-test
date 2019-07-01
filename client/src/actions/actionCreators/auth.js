import axios from "axios";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import * as TYPES from "../actionTypes";
import { push } from "connected-react-router";

export const login = form => {
  return dispatch => {
    dispatch({
      type: TYPES.LOCAL_LOGIN_REQUEST
    });
    return axios
      .post("/api/auth/local-login", form)
      .then(res => {
        //on success, get token and user as response
        console.log(res.data);
        const { token, user } = res.data;
        setAuthorizationToken(token);
        dispatch(loginSuccess(user));
        dispatch(push("/after-login"));
      })
      .catch(err => {
        if (err.response && err.response.status)
          if (err.response.status === 401) return "Wrong username or password";
        dispatch({
          type: TYPES.LOCAL_LOGIN_ERROR
        });
      });
  };
};

const loginSuccess = user => {
  return {
    type: TYPES.LOCAL_LOGIN_SUCCESS,
    payload: user
  };
};

export const signup = form => {
  return dispatch => {
    dispatch({
      type: TYPES.SIGNUP_REQUEST
    });
    return axios.post("/api/auth/local-signup", form).then(res => {
      console.log(res.data);
    });
  };
};
