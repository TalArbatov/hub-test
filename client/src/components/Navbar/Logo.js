import React from "react";
import styled from "styled-components";

const LogoStyle = styled.p`
  color: white;
  text-shadow: 2px 2px #efefef;
`;

const Logo = props => {
  return (
    <ul>
      <li>
        <LogoStyle>Hub</LogoStyle>
      </li>
    </ul>
  );
};

export default Logo;
