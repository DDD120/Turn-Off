import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut30-1.webp";
import BUBBLE6URL from "images/bubble/bubble-6.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const CutContainer = styled(motion.div)`
  width: 90%;

  & > img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 90%;

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

const Cut30 = () => {
  return (
    <Base>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={IMG1URL} alt="마음에 들어하는 뭉게" />
      </CutContainer>

      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={BUBBLE6URL} alt="말풍선" />
        <p>아무튼 이렇게 같은 언어로 마음을 전할 수 있다니 좋다</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut30;
