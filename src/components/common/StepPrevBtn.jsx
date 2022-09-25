import React from "react";
import styled from "styled-components";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { useProgress } from "store/progress";

const PrevBtnIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s;
  color: ${({ color }) => `${color}60`};

  &:hover {
    color: ${({ color }) => color};
  }
`;

const StepPrevBtn = ({ color = "#001220" }) => {
  const { action } = useProgress();
  const handleClickPrevStep = () => {
    action.decrease();
  };

  return (
    <PrevBtnIcon color={color} onClick={handleClickPrevStep}>
      <IoMdArrowDropleftCircle />
    </PrevBtnIcon>
  );
};

export default StepPrevBtn;
