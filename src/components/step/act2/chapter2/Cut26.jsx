import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut26-1.webp";
import BUBBLE5URL from "images/bubble/bubble-5.webp";

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

const Chat = styled(motion.div)`
  width: 80%;
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

const CutContainer = styled(motion.div)`
  width: 80%;

  & > img {
    width: 100%;
  }
`;

const Cut26 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <img src={IMG1URL} alt="설레하는 뭉게" />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <img src={BUBBLE5URL} alt="말풍선" />
        <p>누나가 문자 못봤나 보네... 내가 대신 답해줘도 되겠지?</p>
      </Chat>

      <StepBtn />
    </Base>
  );
};

export default Cut26;
