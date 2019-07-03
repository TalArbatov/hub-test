import * as TYPES from '../../constants/actionTypes';
import { TemporaryCredentials } from 'aws-sdk';

export const showModal = (modalType, modalProps) => {
    return {
        type: TYPES.SHOW_MODAL,
        payload: {
            modalType,
            modalProps
        }
    }
}

export const hideModal = () => {
    return {
        type: TYPES.HIDE_MODAL
    }
}