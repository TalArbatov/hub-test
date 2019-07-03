import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import SubmitButton from '../../../styles/SubmitButton';

const SubmitDiv = styled.div`
dispay:flex;
flex-direction:row;
align-items:center;
a {
  text-decoration:none;
  font-family:Gisha;
  font-size:0.9em
  font-weight:500;
}
`;

// const SubmitButton = styled.button`
//   cursor: pointer;
//   height: 30px;
//   border-radius: 20px;
//   background: white;
//   color: #1ecd97;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 4px 20px;
//   margin: 10px;
//   font-family: Gisha;
//   border: 2px solid #1ecd97;
//   transition: 0.3s;
//   &:hover {
//     background: #1ecd97;
//     color: white;
//   }
// `;

const LocalForm = props => {
  const { classes } = props;

  return (
    <form onSubmit={props.onSubmit}>
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
          type="password"
          label="Password"
          margin="normal"
          variant="outlined"
          name="password"
          onChange={props.changeForm}
          classes={{ root: classes.inputs }}
        />
      </div>
      <SubmitDiv>
        <SubmitButton type="submit">Submit</SubmitButton>

        <a href="#">Forgot your password?</a>
      </SubmitDiv>
      <p style={{ color: "red", textAlign: "center" }}>{props.response}</p>
    </form>
  );
};
const styles = {
  inputs: {
    margin: "3px"
  },
  submitButton: {
    margin: "10px",
    
  }
};

export default withStyles(styles)(LocalForm);
