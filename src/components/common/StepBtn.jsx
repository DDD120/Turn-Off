import React from "react";
import styled from "styled-components";
import StepPrevBtn from "./StepPrevBtn";
import StepNextBtn from "./StepNextBtn";

const Base = styled.div`
  z-index: 9;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
`;

const StepBtn = ({ color, startStep = false, endStep = false }) => {
  return (
    <Base>
      {!startStep && <StepPrevBtn color={color} />}
      {!endStep && <StepNextBtn color={color} />}
    </Base>
  );
};

export default StepBtn;
