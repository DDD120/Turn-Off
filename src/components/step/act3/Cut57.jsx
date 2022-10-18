import React from "react";
import IMG1URL from "images/act3/cut57-1.webp";
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
`;

const CutContainer = styled.div`
  width: 90%;

  img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)`
  width: 50%;
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

const Chat1 = styled(Chat)`
  margin-left: auto;
  transform: translateY(20px);
`;
const Chat2 = styled(Chat)`
  margin-right: auto;
  transform: translateY(-20px);
`;

const Cut57 = () => {
  return (
    <Base>
      <Chat1 initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>언제 잠든 거지?</p>
      </Chat1>

      <CutContainer>
        <img src={IMG1URL} alt="밝은 표정의 뭉게" />
      </CutContainer>
      <Chat2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.2 }}
      >
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>오랜만에 개운하네 피곤한 것도 없고</p>
      </Chat2>

      <StepBtn />
    </Base>
  );
};

export default Cut57;
