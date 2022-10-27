import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  FcDocument,
  FcStart,
  FcSms,
  FcEditImage,
  FcPlus,
  FcHome,
} from "react-icons/fc";
import StepBtn from "components/common/StepBtn";
import MemoLayout from "./MemoApp/MemoLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useToast from "hooks/useToast";
import { motion } from "framer-motion";
import Window from "components/common/Window";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Animation = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cut18 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const dragRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("맨 왼쪽 메모장부터 클릭해볼까?");

  const handleClickMemo = () => {
    setIsClicked(true);
  };

  return (
    <Base ref={dragRef}>
      <Animation initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <Window>
          <Bottom>
            <ul>
              <li>
                <IconWrapper>
                  <FcHome />
                </IconWrapper>
              </li>
              <li>
                <IconWrapper onClick={handleClickMemo} cursor="true" hover>
                  <FcDocument />
                </IconWrapper>
                <Active />
              </li>
              <li>
                <IconWrapper hover>
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
      </Animation>
      <ToastContainer />
      {isClicked && (
        <>
          <MemoLayout initial={true} dragRef={dragRef} />
          <StepBtn />
        </>
      )}
    </Base>
  );
};

export default Cut18;
