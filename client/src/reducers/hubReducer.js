import * as TYPES from "../constants/actionTypes";

const defaultState = {
  isLoading: false,
  hub: null,
  hubs: []
};

const hubReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.SUBSCRIBE_SUCCESS:
      return { ...state, hub: { ...state.hub, isSubscribed: true } };
    case TYPES.UNSUBSCRIBE_SUCCESS:
      return { ...state, hub: { ...state.hub, isSubscribed: false } };
    case TYPES.SUBSCRIBE_REQUEST:
    case TYPES.UNSUBSCRIBE_REQUEST:
    case TYPES.FETCH_HUB_REQUEST:
      return { ...state, isLoading: true };
    case TYPES.SUBSCRIBE_ERROR:
    case TYPES.UNSUBSCRIBE_ERROR:
    case TYPES.FETCH_HUB_ERROR:
      return { ...state, isLoading: false };
    case TYPES.FETCH_HUB_SUCCESS:
      return { ...state, isLoading: false, hub: action.payload };
    case TYPES.FETCH_HUBS:
      return { ...state, hubs: action.payload };
    default:
      return state;
  }
};

export default hubReducer;
