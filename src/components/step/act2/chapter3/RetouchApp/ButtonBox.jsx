import React from "react";
import styled from "styled-components";

const Base = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ButtonBox = ({ children }) => {
  return <Base>{children}</Base>;
};

export default ButtonBox;
