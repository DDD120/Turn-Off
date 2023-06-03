import React from "react"
import styled from "styled-components"
import { FcHighPriority } from "react-icons/fc"

const Base = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 400px;
  width: 100%;
  transform: translate(-50%, -50%);
  background-color: #ddd;
  border: none;
  overflow: hidden;
  border-radius: 12px;
`

const Top = styled.div`
  padding: 8px;
  background-color: #eee;
  font-size: 0.8rem;
`

const MsgContent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 1.4rem;
  }
`

const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 10px;
`

const Button = styled.button`
  flex: 1;
  background-color: #fff;
  padding: 10px;
  height: 40px;
  gap: 8px;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    border: 2px solid #ccc;
    cursor: pointer;
    filter: brightness(0.8);
  }
`

const ConfirmMsgBox = ({ modalRef, onYesBtnClick, onNoBtnClick }) => {
  return (
    <Base ref={modalRef}>
      <Top>
        <span>여러 항목 삭제</span>
      </Top>
      <MsgContent>
        <FcHighPriority />이 33개의 항목을 완전히 삭제하시겠습니까?
      </MsgContent>
      <ButtonBox>
        <Button type="button" onClick={onYesBtnClick}>
          예
        </Button>
        <Button type="button" onClick={onNoBtnClick}>
          아니요
        </Button>
      </ButtonBox>
    </Base>
  )
}

export default ConfirmMsgBox
