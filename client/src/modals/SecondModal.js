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

const SecondModal = props => {
  const [getModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <p>This is a modal Test</p>
    </div>
  );
};

export default SecondModal;
