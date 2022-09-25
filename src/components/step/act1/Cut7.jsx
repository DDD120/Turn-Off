import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import IMG1URL from "images/act1/cut7-1.webp";
import BUBBLE5URL from "images/bubble/bubble-5.webp";
import ZzzAnimation from "./ZzzAnimation";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CutContainer = styled(motion.div)`
  width: 40%;
  z-index: 1;
  position: relative;
  margin-bottom: 50px;

  & > img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  & > img {
    width: 100%;
  }

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
  }
`;

const Cut7 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <ZzzAnimation />
        <img src={IMG1URL} alt="자는 뭉게" />
      </CutContainer>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0], scale: [0.8, 1] }}
      >
        <img src={BUBBLE5URL} alt="말풍선" />
        <p>아주 푹 자고 있구먼</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut7;
