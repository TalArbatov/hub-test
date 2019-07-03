import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import {hideModal} from '../actions/actionCreators/modal';
import {connect} from 'react-redux'
const IconWrapper = styled.div`
  display: flex;
  flex-diretion: row;
  justify-content: flex-end;
`;


const CloseButton = props => {
  return (
    <IconWrapper>
      <IconButton onClick={props.hideModal}>
        <CloseIcon style={{ color: "grey" }} />
      </IconButton>
    </IconWrapper>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal())
    }
}

export default connect(null, mapDispatchToProps)(CloseButton);
