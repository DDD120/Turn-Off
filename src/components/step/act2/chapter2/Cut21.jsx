import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut21-1.webp";
import BUBBLE6URL from "images/bubble/bubble-6.webp";

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
  width: 60%;

  & > img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)`
  width: 60%;
  position: relative;
  cursor: pointer;

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

const Cut21 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <img src={BUBBLE6URL} alt="말풍선" />
        <p>
          하나 완료! <br /> 그 다음엔...
        </p>
      </Chat>
      <CutContainer
        initial={{ opcity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <img src={IMG1URL} alt="다음 앱을 누르려는 손" />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut21;
