import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Base = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 360px;
  width: 100%;
  border: none;
  padding: 20px;
  box-shadow: 0px 0px 10px #c9ccd5;
  z-index: 19;
`;

const ToggleBtn = styled.button`
  width: 60px;
  height: 30px;
  border: 2px solid #fff;
  background-color: rgba(43, 40, 40, 0.185);
  display: flex;
  justify-content: ${({ $isActive }) =>
    $isActive ? "flex-end" : "flex-start"};
  align-items: center;
  border-radius: 50px;
  padding: 4px;
  z-index: 1;
  cursor: pointer;
`;

const Handle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: ${({ $isActive }) => ($isActive ? "#5f3dc4" : "#495057")};
  border-radius: 50%;
`;

const SettingMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ApplyBtn = styled.button`
  font-size: 1.2rem;
  width: 100%;
  padding: 10px 0;
  color: #fff;
  background-color: ${({ isSatisfied }) =>
    isSatisfied ? "#5f3dc4" : "#495057"};
  border-radius: 4px;
  margin: 20px 0 40px;
  transition: 0.3s;
  gap: 4px;

  &:hover {
    ${({ isSatisfied }) =>
      isSatisfied &&
      css`
        filter: brightness(0.9);
        cursor: pointer;
      `}
  }
`;

const SettingModal = ({
  modalRef,
  isActiveViewHistory,
  isActiveAlgorithm,
  setIsActiveViewHistory,
  setIsActiveAlgorithm,
  onApplyBtnClick,
}) => {
  const handleSwitchBtnClick = (state, value) => {
    state(!value);
  };
  return (
    <Base ref={modalRef}>
      <ul>
        <SettingMenu>
          <p>시청 기록 모두 지우기</p>
          <ToggleBtn
            onClick={() =>
              handleSwitchBtnClick(setIsActiveViewHistory, isActiveViewHistory)
            }
            $isActive={isActiveViewHistory}
          >
            <Handle layout $isActive={isActiveViewHistory} />
          </ToggleBtn>
        </SettingMenu>
        <SettingMenu>
          <p>알고리즘 일시중지</p>
          <ToggleBtn
            onClick={() =>
              handleSwitchBtnClick(setIsActiveAlgorithm, isActiveAlgorithm)
            }
            $isActive={isActiveAlgorithm}
          >
            <Handle layout $isActive={isActiveAlgorithm} />
          </ToggleBtn>
        </SettingMenu>
      </ul>
      <ApplyBtn
        onClick={onApplyBtnClick}
        isSatisfied={isActiveAlgorithm && isActiveAlgorithm}
      >
        적용
      </ApplyBtn>
    </Base>
  );
};

export default SettingModal;
