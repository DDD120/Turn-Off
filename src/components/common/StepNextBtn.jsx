import React from "react";
import styled from "styled-components";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useProgress } from "store/progress";

const NextBtnIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s;
  color: ${({ color }) => `${color}60`};

  &:hover {
    color: ${({ color }) => color};
  }
`;

const StepNextBtn = ({ color = "#001220" }) => {
  const { action } = useProgress();

  const handleClickNextStep = () => {
    action.increase();
  };

  return (
    <NextBtnIcon color={color} onClick={handleClickNextStep}>
      <IoMdArrowDroprightCircle />
    </NextBtnIcon>
  );
};

export default StepNextBtn;
