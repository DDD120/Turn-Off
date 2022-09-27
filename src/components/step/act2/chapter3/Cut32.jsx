import React from "react";
import styled from "styled-components";
import IMG1URL from "images/act2/chapter3/cut32-1.webp";
import BUBBLE6URL from "images/bubble/bubble-6.webp";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CutContainer = styled(motion.div)`
  width: 90%;

  img {
    width: 100%;
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

const Cut32 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <img src={BUBBLE6URL} alt="말풍선" />
        <p>어라 저 화면도...</p>
      </Chat>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <img src={IMG1URL} alt="" />
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut32;
