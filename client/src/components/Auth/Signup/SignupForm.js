import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { SubmitDiv } from '../styles'
import SubmitButton from '../../../styles/SubmitButton';
const SignupForm = props => {
  const { classes } = props;

  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <TextField
          label="Username"
          margin="normal"
          variant="outlined"
          name="username"
          onChange={props.changeForm}
          classes={{ root: classes.inputs }}
        />
      </div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          name="email"
          onChange={props.changeForm}
          classes={{ root: classes.inputs }}
        />
      </div>
      <div>
        <TextField
          label="Password"
          margin="normal"
          variant="outlined"
          name="password"
          type="password"
          onChange={props.changeForm}
          classes={{ root: classes.inputs }}
        />
      </div>
      <div>
        <TextField
          label="Confirm password"
          margin="normal"
          variant="outlined"
          name="confirmPassword"
          type="password"
          onChange={props.changeForm}
          classes={{ root: classes.inputs }}
        />
      </div>
      <SubmitDiv>
      <SubmitButton type="submit">Submit</SubmitButton>
      </SubmitDiv>
    </form>
  );
};
const styles = {
  inputs: {
    margin: "3px"
  },
  submitButton: {
    margin: "10px"
  }
};

export default withStyles(styles)(SignupForm);
