import React, { useState } from "react";
import styled from "styled-components";
import Window from "components/common/Window";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";
import { FcStart, FcPlus, FcHome } from "react-icons/fc";
import VideoApp from "./VideoApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useToast from "hooks/useToast";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = styled(motion.div)`
  width: 80%;
  position: absolute;
`;

const Cut30 = () => {
  const [showVideoApp, setShowVideoApp] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("동영상 시청 프로그램을 켜보자");

  const handleClickVideoIcon = () => {
    setShowVideoApp(true);
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
              <IconWrapper
                onClick={handleClickVideoIcon}
                cursor="true"
                hover={true}
              >
                <FcStart />
              </IconWrapper>
              <Active />
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
      {showVideoApp && (
        <>
          <Animation
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.5, 1], scaleY: [0, 1.04, 1] }}
          >
            <VideoApp isActive={false} />
          </Animation>
          <StepBtn />
        </>
      )}
      <ToastContainer />
    </Base>
  );
};

export default Cut30;
