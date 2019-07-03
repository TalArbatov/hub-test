import * as TYPES from "../constants/actionTypes";

const defaultState = {
  isLoading: false,
  hub: null,
  hubs: []
};

const hubReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.FETCH_HUB_REQUEST:
      return { ...state, isLoading: true };
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
