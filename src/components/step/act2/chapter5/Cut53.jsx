import React, { useState } from "react";
import Window from "components/common/Window";
import { Bottom, IconWrapper } from "components/common/WindowStyle";
import { FcHome } from "react-icons/fc";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import useToast from "hooks/useToast";
import { ToastContainer } from "react-toastify";
import { useProgress } from "store/progress";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseMsgWrapper = styled.div`
  position: absolute;
  width: 60%;
`;

const CloseMsg = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #ffecde;
  border: 2px solid #000000;
  border-radius: 8px;
  box-shadow: 0px 0px 40px #ffecde;
  text-align: center;
  padding: 12px;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: #ffbf91;
  cursor: pointer;
  transition: 0.3s;
  flex: 1;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Cut53 = () => {
  const [showCloseMsgBox, setShowCloseMsgBox] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("컴퓨터를 종료하자");
  const { action } = useProgress();

  const handleClickHomeBtn = () => {
    setShowCloseMsgBox(true);
  };

  const handleCheckBtn = () => {
    action.increase();
  };

  const handleCancelBtn = () => {
    setShowCloseMsgBox(false);
  };

  return (
    <Base>
      <Window>
        <Bottom>
          <ul>
            <li>
              <IconWrapper
                onClick={handleClickHomeBtn}
                cursor="true"
                hover="true"
              >
                <FcHome />
              </IconWrapper>
            </li>
          </ul>
        </Bottom>
      </Window>
      <ToastContainer />
      {showCloseMsgBox && (
        <CloseMsgWrapper>
          <CloseMsg>
            <div>
              <p>컴퓨터를 종료하시겠습니까?</p>
              <ButtonBox>
                <Button onClick={handleCheckBtn}>확인</Button>
                <Button onClick={handleCancelBtn}>취소</Button>
              </ButtonBox>
            </div>
          </CloseMsg>
        </CloseMsgWrapper>
      )}
    </Base>
  );
};

export default Cut53;
