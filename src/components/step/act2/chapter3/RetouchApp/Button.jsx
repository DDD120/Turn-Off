import React from "react";
import styled from "styled-components";

const Base = styled.button`
  flex: 1;
  padding: 20px;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ bgColor }) => `${bgColor}cc`};
  }
`;

const Button = ({ onBtnClick, bgColor, children }) => {
  return (
    <Base type="button" bgColor={bgColor} onClick={onBtnClick}>
      {children}
    </Base>
  );
};

export default Button;
