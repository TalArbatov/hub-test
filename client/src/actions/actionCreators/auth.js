import axios from "axios";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import * as TYPES from "../../constants/actionTypes";
import { push } from "connected-react-router";

export const login = form => {
  return dispatch => {
    dispatch({
      type: TYPES.LOCAL_LOGIN_REQUEST
    });
    return axios
      .post("/api/auth/local-login", form)
      .then(res => {
        const { token, user } = res.data;

        //on success, get token and user as response
        console.log("data:");
        console.log(res.data);
        return dispatch(loginSuccess(user, token));
      })
      .catch(err => {
        dispatch({
          type: TYPES.LOCAL_LOGIN_ERROR
        });
        // if (err.response && err.response.status)
        //   if (err.response.status === 401) return {success: false, message: "Wrong username or password"};
        return {success: false, message: "Wrong username or password"}
      });
  };
};

export const loginSuccess = (user, token) => {
  return dispatch => {
    //const { token, user } = res.data;
    console.log("tokentoken: " + token);
    setAuthorizationToken(token);

    dispatch({
      type: TYPES.LOCAL_LOGIN_SUCCESS,
      payload: user
    });
    return {success: true}
   //dispatch(push("/after-login"));
  };
};

export const signup = form => {
  return dispatch => {
    dispatch({
      type: TYPES.SIGNUP_REQUEST
    });
    return axios
      .post("/api/auth/signup", form)
      .then(res => {
        // signup success
        const user = form;
        const cleanUser = { email: user.email, password: user.password };
        console.log(cleanUser);
        dispatch({
          type: TYPES.SIGNUP_SUCCESS
        });
        dispatch(login(cleanUser));
      })
      .catch(err => {
        // signup error
        console.log(err);
        dispatch({
          type: TYPES.SIGNUP_ERROR
        });
        if (err.response && err.response.data)
          return {
            success: false,
            messages: err.response.data
          };
      });
  };
};

export const logout = () => {
  //first remove axios auth header and localStorage JWT

  // TODO: mantually invalidate JWT token when user logs out / banned / changes password
  // by creating a blacklist on DB and compare or using Redis, or rotating tokens
  return dispatch => {
    console.log("logging out..");
    delete axios.defaults.headers.common["authorization"];
    localStorage.removeItem("token");
    dispatch(push("/login"));
    dispatch({
      type: TYPES.LOGOUT
    });
  };
};
