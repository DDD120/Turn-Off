import React, { useState } from "react"
import styled, { css } from "styled-components"
import { FcFullTrash } from "react-icons/fc"
import { HiOutlineTrash } from "react-icons/hi"
import { RiCloseFill } from "react-icons/ri"
import ConfirmMsgBox from "./ConfirmMsgBox"
import { useRef } from "react"
import TrashFiles from "./TrashFiles"

const Base = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #fff;
  box-shadow: 0px 0px 10px #c9ccd5;
  border-radius: 12px;
  padding: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    font-size: 1.2rem;
  }
`

const Menu = styled.div`
  width: 100%;
  padding: 4px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #ccc;
`

const EmptyTrashBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.3s;

  svg {
    font-size: 1.2rem;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &:hover {
        background-color: #ccc;
        cursor: pointer;
      }
    `}
`
const EmptyFolderMsg = styled.p`
  text-align: center;
  color: #666;
`

const CloseIcon = styled.div`
  padding: 4px;
  cursor: ${({ $isEmptyTrashFolder }) => $isEmptyTrashFolder && "pointer"};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  margin: 10px 0;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #d3d2d5;
    opacity: 0.4;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`

const TrashFolder = ({ isActive, onCloseBtnClick }) => {
  const [isEmptyTrashFolder, setIsEmptyTrashFolder] = useState(false)
  const modalRef = useRef(null)

  const handleYesBtnClick = () => {
    modalRef.current.close()
    setIsEmptyTrashFolder(true)
  }

  return (
    <Base>
      <Top>
        <Title>
          <FcFullTrash /> <span>휴지통</span>
        </Title>
        <CloseIcon
          $isEmptyTrashFolder={isEmptyTrashFolder}
          onClick={isEmptyTrashFolder ? onCloseBtnClick : undefined}
        >
          <RiCloseFill />
        </CloseIcon>
      </Top>
      <Menu>
        {!isEmptyTrashFolder && (
          <EmptyTrashBtn
            $isActive={isActive}
            type="button"
            onClick={isActive ? () => modalRef.current.showModal() : undefined}
          >
            <HiOutlineTrash /> 휴지통 비우기
          </EmptyTrashBtn>
        )}
      </Menu>
      <Content>
        {isEmptyTrashFolder ? (
          <EmptyFolderMsg>이 폴더는 비어 있습니다.</EmptyFolderMsg>
        ) : (
          <TrashFiles />
        )}
      </Content>
      <ConfirmMsgBox
        modalRef={modalRef}
        onYesBtnClick={handleYesBtnClick}
        onNoBtnClick={() => modalRef.current.close()}
      />
    </Base>
  )
}

export default TrashFolder
