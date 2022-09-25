import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import IMG1URL from "images/act1/cut4-1.webp";

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
  margin-bottom: 10px;

  & > img {
    width: 100%;
  }

  & > p {
    font-size: 1.2rem;
    word-break: keep-all;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CutContainer = styled.div`
  position: relative;
  width: 80%;

  & > img {
    width: 100%;
  }
`;

const Text = styled.span`
  display: inline-block;
  padding: 2px 4px;
  background-color: #ffffffdd;

  &:nth-of-type(1) {
    position: absolute;
    top: 40%;
    left: 20px;
  }

  &:nth-of-type(2) {
    position: absolute;
    top: 60%;
    right: 20px;
  }
`;

const Cut4 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 1], y: [-10, 10, 0] }}
      >
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>바로 나일 거다</p>
      </Chat>

      <CutContainer>
        <img src={IMG1URL} alt="누워 있는 승현" />
        <Text>하...</Text>
        <Text>망했다...</Text>
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut4;
