import React from "react";
import IMG1URL from "images/act3/cut61-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
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
  gap: 20px;
`;

const CutContainer = styled.div`
  width: 90%;

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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
  }
`;

const Cut61 = () => {
  return (
    <Base>
      <CutContainer>
        <img src={IMG1URL} alt="옆모습 승현" />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={BUBBLE3URL} alt="말풍선" />
        <p>그럼 오늘도</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut61;
