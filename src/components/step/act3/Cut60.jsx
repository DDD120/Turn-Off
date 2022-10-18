import React from "react";
import IMG1URL from "images/act3/cut60-1.webp";
import BUBBLE6URL from "images/bubble/bubble-6.webp";
import styled from "styled-components";
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
  gap: 40px;
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

const CutContainer = styled.div`
  width: 70%;

  img {
    width: 100%;
  }
`;

const Cut60 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <img src={BUBBLE6URL} alt="말풍선" />
        <p>귀여워 ㅎㅎ</p>
      </Chat>
      <CutContainer>
        <img src={IMG1URL} alt="자는 뭉게 쓰다듬는 승현" />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut60;
