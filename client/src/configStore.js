import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {routerMiddleware, connectRouter} from 'connected-react-router';

import asyncMiddleware from './middlewares/asyncMiddleware'
import {createBrowserHistory} from 'history';

//reducers
import authReducer from "./reducers/authReducer";
import modalReducer from './reducers/modalReducer';
import hubReducer from './reducers/hubReducer'

export const history = createBrowserHistory();


// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

export const configStore = () =>
  createStore(
    combineReducers({
      router: connectRouter(history),
      authReducer,
      modalReducer,
      hubReducer
    }),
    composeWithDevTools(applyMiddleware(thunk, myRouterMiddleware, asyncMiddleware))
  );


