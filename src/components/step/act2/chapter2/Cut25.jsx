import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut25-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CutContainer = styled(motion.div)`
  width: 60%;

  & > img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)`
  width: 60%;
  position: relative;

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

const Cut25 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>생각하니까 또 눈물이 나</p>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={IMG1URL} alt="훌쩍이는 뭉게" />
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut25;
