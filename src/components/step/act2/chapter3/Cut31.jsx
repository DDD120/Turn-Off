import React, { useState } from "react";
import styled from "styled-components";
import Window from "components/common/Window";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";
import { FcStart, FcEditImage, FcPlus, FcHome } from "react-icons/fc";
import RetouchApp from "./RetouchApp";
import StepBtn from "components/common/StepBtn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useToast from "hooks/useToast";
import { motion } from "framer-motion";

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
  const [isShowRetouchApp, setIsShowRetouchApp] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("그 다음은 사진 보정 프로그램!");

  const handleClickRetouchApp = () => {
    setIsShowRetouchApp(true);
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
                onClick={handleClickRetouchApp}
                cursor="true"
                hover={true}
              >
                <FcEditImage />
              </IconWrapper>
              <Active />
            </li>
            <li>
              <IconWrapper hover={true}>
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
      <ToastContainer />
      {isShowRetouchApp && (
        <>
          <Animation
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.5, 1], scaleY: [0, 1.04, 1] }}
          >
            <RetouchApp isActive={false} />
          </Animation>
          <StepBtn />
        </>
      )}
    </Base>
  );
};

export default Cut30;
