import React from "react";
import IMG1URL from "images/act3/cut56-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const CutContainer = styled.div`
  width: 50%;

  img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  img {
    width: 100%;
  }

  p {
    word-break: keep-all;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Cut56 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <p>으음 잘잤다</p>
        <img src={BUBBLE4URL} alt="말풍선" />
      </Chat>

      <CutContainer>
        <img src={IMG1URL} alt="" />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut56;
