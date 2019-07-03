import React, { useState } from "react";
import styled from "styled-components";
import { createHub } from "../actions/actionCreators/hub";
import { hideModal } from "../actions/actionCreators/modal";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import SubmitButton from "../styles/SubmitButton";
import CloseButton from "../styles/CloseButton";
import theme from "../utils/theme";
import { push } from "connected-react-router";
const ModalWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
  }
  padding: 45px;
  padding-top: 0;
`;

const Title = styled.p`
  font-weight: 100;
  font-size: 1.3em;
  margin-top: 0;
`;

const CreateHub = props => {
  const [getForm, setForm] = useState({
    name: "",
    description: "",
    privacy: "public"
  });
  const [getErrors, setErrors] = useState([]);
  const onSubmit = e => {
    console.log(getForm);
    e.preventDefault();
    props.createHub(getForm).then(res => {
      console.log(res);
      if (res.success) {
        props.push(`/h/${getForm.name}`);
        props.hideModal();
      } else {
        setErrors(res.messages);
      }
    });
  };
  const onChange = e => {
    setForm({ ...getForm, [e.target.name]: e.target.value });
  };
  return (
    <ModalWrapper>
      <Title>Create a hub</Title>

      <form onSubmit={onSubmit}>
        <TextField
          required
          type="text"
          label="Name"
          variant="outlined"
          name="name"
          onChange={onChange}
          classes={{ root: props.classes.name }}
        />
        <TextField
          required
          label="Description"
          name="description"
          margin="normal"
          variant="outlined"
          classes={{ root: props.classes.description }}
          multiline={true}
          rows={5}
          onChange={onChange}
        />{" "}
        {getErrors.map((error, index) => {
          return (
            <p style={{ color: "red" }} key={index}>
              {error}
            </p>
          );
        })}
        <SubmitButton theme={{ ...theme, width: "100px" }} type="submit">
          Create
        </SubmitButton>
      </form>
    </ModalWrapper>
  );
};

const mapStateToProps = state => {
  return {
    hubReducer: state.hubReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createHub: form => dispatch(createHub(form)),
    push: path => dispatch(push(path)),
    hideModal: () => dispatch(hideModal())
  };
};
const styles = {
  name: {
    margin: "10px",
    //maxWidth: "100%",
    //maxWidth: "300px",
    width: "400px",
    maxWidth: '70vw'
  },
  description: {
    margin: "10px",
    
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateHub));
