import React, { useState } from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import Window from "components/common/Window";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";
import { FcStart, FcSms, FcEditImage, FcPlus, FcHome } from "react-icons/fc";
import MessageApp from "./MessageApp";
import useToast from "hooks/useToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { motion } from "framer-motion";

const Base = styled.div`
  padding: 10px;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Animation = styled(motion.div)`
  width: 100%;
  position: absolute;
`;

const MsgWrapper = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Cut22 = () => {
  const [showMsg, setShowMsg] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("이번엔 메신져 앱을 눌러보자");

  const handleClickMsgIcon = () => {
    setShowMsg(true);
  };

  return (
    <Base>
      <Window>
        <Bottom>
          <ul>
            <li>
              <IconWrapper>
                <FcHome />
              </IconWrapper>
            </li>
            <li>
              <IconWrapper onClick={handleClickMsgIcon} cursor="true" hover>
                <FcSms />
              </IconWrapper>
              <Active />
            </li>
            <li>
              <IconWrapper hover>
                <FcEditImage />
              </IconWrapper>
              <Active />
            </li>
            <li>
              <IconWrapper hover>
                <FcStart />
              </IconWrapper>
              <Active />
            </li>
            <li>
              <IconWrapper hover>
                <FcPlus />
              </IconWrapper>
              <Active />
            </li>
          </ul>
        </Bottom>
      </Window>
      {showMsg && (
        <>
          <Animation
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.5, 1], scaleY: [0, 1.1, 1] }}
          >
            <MsgWrapper>
              <MessageApp isActive={false} onMotion={true} />
            </MsgWrapper>
          </Animation>
          <StepBtn />
        </>
      )}
      <ToastContainer />
    </Base>
  );
};

export default Cut22;
