import React from "react";
import IMG1URL from "images/act2/chapter3/cut38-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CutContainer = styled.div`
  position: absolute;
  bottom: -10px;
  width: 50%;

  img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)`
  position: relative;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
  }
`;

const Cut38 = () => {
  return (
    <Base>
      <CutContainer>
        <Chat
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [-10, 0] }}
        >
          <img src={BUBBLE4URL} alt="말풍선" />
          <p>잘한 건가...?</p>
        </Chat>
        <img src={IMG1URL} alt="" />
      </CutContainer>
      <StepBtn color="#ffffff" />
    </Base>
  );
};

export default Cut38;
