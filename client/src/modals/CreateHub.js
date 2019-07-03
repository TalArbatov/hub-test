import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  padding: 10px;
  border-left: 5px solid ${props => props.theme.colors.primary};
`;

const CreateHub = props => {
  const [getForm, setForm] = useState({
    name: "",
    description: "",
    privacy: "public"
  });
  onSubmit = () => {};
  onChange = e => {
    setForm({...getForm, [e.target.name]: e.target.value})
  };
  return (
    <ModalWrapper>
      <h1>Create new hub</h1>

      <form onSubmit={onSubmit}>
        <input placeholder="name" type="text" name="name" onChange={onChange} />
        <input placeholder="description" type="text" name="description" onChange={onChange} />
      </form>
      <button onClick={props.hideModal}>Hide modal</button>
    </ModalWrapper>
  );
};

export default CreateHub;
