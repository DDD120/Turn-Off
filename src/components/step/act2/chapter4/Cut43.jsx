import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter4/cut43-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import StepBtn from "components/common/StepBtn";

const Base = styled.div`
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CutContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;

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

const Cut43 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <img src={IMG1URL} alt="영상을 클릭하는 뭉게 손가락" />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <img src={BUBBLE3URL} alt="말풍선" />
        <p>이 영상은 재밌어 보이는데 하나만 볼까...</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut43;
