import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { showModal, hideModal } from "../actions/actionCreators/modal";
import * as MODALS from "../constants/modalTypes";
import styled from "styled-components";
//import modals
import TestModal from "./TestModal";
import SecondModal from "./SecondModal";
import CreateHub from "./CreateHub";
import Login from "../components/Auth/Login/Login";
import theme from "../utils/theme";
import CloseButton from "../styles/CloseButton";

Modal.setAppElement("#root");


const modals = {
  [MODALS.TEST_MODAL]: TestModal,
  [MODALS.SECOND_MODAL]: SecondModal,
  [MODALS.CREATE_HUB]: CreateHub,
  [MODALS.LOGIN]: Login
};

const RootModal = props => {
  console.log(props.modalReducer);
  const { modalType, modalProps, isOpen } = props.modalReducer;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: 0,
      transform: "translate(-50%, -50%)",
      borderRadius: theme.window.borderRadius,
      maxWidth: "600px",
      width: "fit-content",
      //border-left: 5px solid ${props => props.theme.colors.primary};
      borderLeft: modalProps.bookmark ? `5px solid ${theme.colors.primary}` : 'none'
    }
  };
  
  // if(!modalType) {
  //     return <span />
  // }
  // const ChosenModal = modals[modalType];
  // return <ChosenModal {...modalProps}/>
  if (!props.modalReducer.isOpen) return null;
  const ModalContent = modals[modalType];
  return (
    <Modal isOpen={isOpen} onRequestClose={() => props.hideModal()} style={customStyles}>
        {modalProps.closeButton && <CloseButton />}

        
      <ModalContent hideModal={props.hideModal} {...modalProps} />
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    modalReducer: state.modalReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootModal);
