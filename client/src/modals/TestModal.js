import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const TestModal = props => {
  const [getModalOpen, setModalOpen] = useState(false);
  return (
    

      <Modal
        isOpen={true}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        contentLabel="test Modal"
      >
        <h1>This is my modal content</h1>
        <button onClick={() => setModalOpen(false)}>close</button>
      </Modal>
  );
};

export default TestModal;
