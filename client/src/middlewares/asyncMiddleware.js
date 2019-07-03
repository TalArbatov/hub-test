import * as TYPES from '../constants/actionTypes'


const asyncMiddleware = store => next => action => {

    if(action.asyncType === 'REQUEST') {
      console.log('action is an assync request: ')
      console.log(action.type)
    }


    // if (isPromise(action.payload)) {
    //     console.log('IS PROMISE')
    //   store.dispatch({ type: ASYNC_START, subtype: action.type });
  
    //   const currentView = store.getState().viewChangeCounter;
    //   const skipTracking = action.skipTracking;
  
    //   action.payload.then(
    //     res => {
    //     //   const currentState = store.getState()
    //     //   if (!skipTracking && currentState.viewChangeCounter !== currentView) {
    //     //     return
    //     //   }
    //     //   console.log('RESULT', res);
    //     //   action.payload = res;
    //       store.dispatch({ type: ASYNC_END, promise: action.payload });
    //       store.dispatch(action);
    //     }).catch(error => {
    //         console.log('in async middleware')
    //         console.log(error)
    //         // const currentState = store.getState()
    //         // if (!skipTracking && currentState.viewChangeCounter !== currentView) {
    //         //   return
    //         // }
    //         // console.log('ERROR', error);
    //         // action.error = true;
    //         // action.payload = error.response.body;
    //         // if (!action.skipTracking) {
    //         //   store.dispatch({ type: ASYNC_END, promise: action.payload });
    //         // }
    //         // store.dispatch(action);
    //       })
  
    //   return;
    // }
  
    next(action);
  };

export default asyncMiddleware


  function isPromise(v) {
    return v && typeof v.then === 'function';
  }
