import axios from "axios";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import * as TYPES from "../actionTypes";
import { push } from "connected-react-router";

export const login = form => {
  return dispatch => {
    dispatch({
      type: TYPES.LOCAL_LOGIN_REQUEST
    });
    axios
      .post("/api/auth/local-login", form)
      .then(res => {
        console.log(res.data);
        setAuthorizationToken(res.data);
        dispatch(loginSuccess());
        dispatch(push('/after-login'))
      })
      .catch(err => {
        console.log(err);
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
