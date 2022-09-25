import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut24-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";

const Base = styled.div`
  padding: 10px;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CutContainer = styled(motion.div)`
  width: 70%;
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
    text-align: center;
    word-break: keep-all;
  }
`;

const Cut24 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <img src={IMG1URL} alt="뭉게를 안고 있는 승현 어머니" />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <img src={BUBBLE3URL} alt="말풍선" />
        <p>품이 참 따뜻했었는데...</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut24;
