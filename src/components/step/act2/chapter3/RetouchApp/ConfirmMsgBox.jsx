import React from "react";
import styled from "styled-components";
import { useProgress } from "store/progress";
import Button from "./Button";
import ButtonBox from "./ButtonBox";

const Base = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #000;
`;

const ConfirmMsg = styled.p`
  padding: 12px;
  text-align: center;
  word-break: keep-all;
`;

const ConfirmMsgBox = ({ modalRef, currentFile, setCurrentFile }) => {
  const { action } = useProgress();

  const handleClickCancleBtn = () => {
    modalRef.current.close();
  };
  const handleClickConfirmBtn = () => {
    if (currentFile === 2) {
      action.increase();
      return;
    }
    modalRef.current.close();
    setCurrentFile((prev) => prev + 1);
  };

  return (
    <Base ref={modalRef}>
      <ConfirmMsg>
        저장하시겠습니까? <br /> 한 번 저장 시 수정을 다시 못하게 됩니다.
      </ConfirmMsg>
      <ButtonBox>
        <Button event={handleClickCancleBtn} bgColor={"#cccccc"}>
          취소
        </Button>
        <Button event={handleClickConfirmBtn} bgColor={"#4dabf7"}>
          확인
        </Button>
      </ButtonBox>
    </Base>
  );
};

export default ConfirmMsgBox;
