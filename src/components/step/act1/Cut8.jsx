import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act1/cut8-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Chat = styled(motion.div)`
  position: absolute;
  z-index: 1;

  &:nth-of-type(1) {
    top: 10px;
    left: 10px;
  }

  &:nth-of-type(2) {
    bottom: 10px;
    right: 10px;
  }

  & > img {
    max-width: 270px;
    width: 100%;
  }

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    word-break: keep-all;
  }
`;

const CutContainer = styled(motion.div)`
  width: 90%;
  & > img {
    width: 100%;
  }
`;

const Cut8 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>마음대로 자고 일어날 수 있어서 부러워</p>
      </Chat>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ delay: 0.4 }}
      >
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>나도 뭉게처럼 하루종일 잤으면 좋겠다</p>
      </Chat>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ delay: 0.2 }}
      >
        <img src={IMG1URL} alt="승현과 뭉게" />
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut8;
