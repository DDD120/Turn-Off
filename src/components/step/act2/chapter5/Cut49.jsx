import React from "react";
import IMG1URL from "images/act2/chapter5/cut49-1.webp";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
  position: relative;

  img {
    width: 100%;
  }

  p {
    position: absolute;
    top: 60%;
    right: 20%;
    transform: translateY(-50%);
  }
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;

  img {
    width: 100%;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
  }
`;

const Cut49 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>어라 불안정 하다고? 어떡하지? 이거 누르면 해결되나?</p>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={IMG1URL} alt="당황하는 뭉게" />
        <p>으아아</p>
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut49;
