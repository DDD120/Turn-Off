import React from "react"
import styled from "styled-components"
import Button from "./Button"
import ButtonBox from "./ButtonBox"

const Base = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #18152e;
  border: none;
`

const ConfirmMsg = styled.p`
  color: #fff;
  margin: 40px;
  text-align: center;
  word-break: keep-all;
`

const ConfirmMsgBox = ({ modalRef, onCancleBtnClick, onConfirmBtnClick }) => {
  return (
    <Base ref={modalRef}>
      <ConfirmMsg>
        저장하시겠습니까? <br /> 저장 시 수정을 다시 못하게 됩니다.
      </ConfirmMsg>
      <ButtonBox>
        <Button onClick={onCancleBtnClick} bgColor={"#cccccc"}>
          취소
        </Button>
        <Button onClick={onConfirmBtnClick} bgColor={"#4dabf7"}>
          확인
        </Button>
      </ButtonBox>
    </Base>
  )
}

export default ConfirmMsgBox
