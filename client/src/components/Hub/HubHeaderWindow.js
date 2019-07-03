import React from "react";
import styled from "styled-components";
import SubmitButton from '../../styles/SubmitButton';
import {connect} from 'react-redux';
import {subscribe, unsubscribe} from '../../actions/actionCreators/hub';

const Wrapper = styled.div``;

const WindowHeader = styled.p`
  font-size: ${props => props.theme.window.header.fontSize};
  color: ${props => props.theme.window.header.color};
  font-weight: 800;
  margin: 0;
  margin-bottom: 25px;
`;
const HubTitle = styled.p`
  font-weight: 0;
  font-size: 1.5em;
`;
const HubDescription = styled.p`
  font-weight: 0;
  font-size: 1em;
`

const HubHeaderWindow = (props) => {
  const { name, description, hubReducer } = props;
  const subButton = <SubmitButton onClick={() => props.subscribe(name)}>Subscribe</SubmitButton>
  const unsubButton = <SubmitButton onClick={() => props.unsubscribe(name)}>Unsubscribe</SubmitButton>

  //TODO : disconnect HubHeaderWindow from redux
  // and pass hub as props from parent container: HubContainer

  return (
    <Wrapper>
      <WindowHeader>Hub Details</WindowHeader>
      <HubTitle>{name}</HubTitle>
      <HubDescription>{description}</HubDescription>
      <p>posts: {hubReducer.hub.posts.length}</p>
      <p>subscribers: {hubReducer.hub.subscribers.length}</p>

      <SubmitButton>Create Post</SubmitButton>
      {hubReducer.hub.isSubscribed ? unsubButton : subButton}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    hubReducer: state.hubReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    subscribe: hubName => dispatch(subscribe(hubName)),
    unsubscribe: hubName => dispatch(unsubscribe(hubName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HubHeaderWindow);
