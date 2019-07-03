import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {showModal, hideModal} from '../actions/actionCreators/modal'
import * as MODALS from '../constants/modalTypes';

//import modals
import TestModal from './TestModal';
import SecondModal from './SecondModal';
import CreateHub from './CreateHub';
import Login from '../components/Auth/Login/Login';
import theme from '../utils/theme'
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: 0,
    transform: "translate(-50%, -50%)",
    borderRadius: theme.window.borderRadius
  }
};



const modals = {
    [MODALS.TEST_MODAL]: TestModal,
    [MODALS.SECOND_MODAL]: SecondModal,
    [MODALS.CREATE_HUB]: CreateHub,
    [MODALS.LOGIN]: Login
}

const RootModal = props => {
    console.log(props.modalReducer)
    const {modalType, modalProps, isOpen} = props.modalReducer;
    // if(!modalType) {
    //     return <span />
    // }
    // const ChosenModal = modals[modalType];
    // return <ChosenModal {...modalProps}/>
    if(!props.modalReducer.isOpen)
        return null
        ;
    const ModalContent = modals[modalType]
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={() => props.hideModal()}
            style={customStyles}
        >
            <ModalContent hideModal={props.hideModal} {...modalProps}></ModalContent>
        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        modalReducer: state.modalReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootModal);