import * as TYPES from '../constants/actionTypes';

const defaultState = {
    isOpen: false,
    modalType: null,
    modalProps: {}
}

const modalReducer = (state = defaultState, action) => {
    switch(action.type) {
        case TYPES.HIDE_MODAL:
            return defaultState;
        case TYPES.SHOW_MODAL:
            return {...state, isOpen: true, modalType: action.payload.modalType, modalProps: action.payload.modalProps}
        default:
            return state;
    }
}

export default modalReducer;