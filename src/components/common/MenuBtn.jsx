import React from "react";
import styled from "styled-components";

const Base = styled.button`
  width: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  margin: 4px 0;
  padding: 12px 24px;
  background-color: #e5ecf2;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: #bfe1ff;
  }
`;

const MenuBtn = ({ onClickMenuBtn = null, children }) => {
  return <Base onClick={onClickMenuBtn}>{children}</Base>;
};

export default MenuBtn;
