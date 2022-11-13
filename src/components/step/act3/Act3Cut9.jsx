import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { useProgress } from "store/progress";

const Base = styled.section`
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a4cfff;
`;

const Sun = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  width: 100px;
  border-radius: 50%;
  background-color: #ffedd3;
  box-shadow: 0px 0px 100px 10px #ffedd3;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const TheEnd = styled.p`
  color: #09253b;
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

const GoMain = styled.button`
  padding: 12px 24px;
  background-color: #89c0ff;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 12px;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Act3Cut9 = () => {
  const { action } = useProgress();

  const goMain = () => {
    action.goMain();
  };

  return (
    <Base>
      <Sun />
      <TheEnd>THE END</TheEnd>
      <GoMain onClick={goMain}>홈으로 가기</GoMain>
      <StepBtn endStep={true} />
    </Base>
  );
};

export default Act3Cut9;
