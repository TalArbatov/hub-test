import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  justify-content:center;
  position: relative;
  overflow: hidden;
  width:32px;
  height:32px !important;
  border-radius: 50%;

  img {
    width: auto;
    height: 100%;
  }
`;

export default ImageWrapper