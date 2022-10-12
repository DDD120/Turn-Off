import React, { useState } from "react";
import styled from "styled-components";
import Window from "components/common/Window";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";
import { FcPlus, FcHome } from "react-icons/fc";
import VideoApp from "./VideoApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useToast from "hooks/useToast";
import { motion, AnimatePresence } from "framer-motion";
import StepBtn from "components/common/StepBtn";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = styled(motion.div)`
  padding: 10px;
  width: 80%;
  position: absolute;
`;

const Cut45 = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("실행을 종료할 방법을 찾아보자!");

  const closeVideoApp = () => {
    setIsCompleted(true);
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
              <IconWrapper hover={true}>
                <FcPlus />
              </IconWrapper>
              <Active />
            </li>
          </ul>
        </Bottom>
      </Window>
      <AnimatePresence>
        {!isCompleted && (
          <Animation exit={{ opacity: [1, 0.5, 0], scaleY: [1, 1.04, 0] }}>
            <VideoApp closeVideoApp={closeVideoApp} isActiveApp={true} />
          </Animation>
        )}
      </AnimatePresence>
      <ToastContainer />
      {isCompleted && <StepBtn />}
    </Base>
  );
};

export default Cut45;
