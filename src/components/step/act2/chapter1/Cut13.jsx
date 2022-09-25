import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import MsgWindow from "./MsgWindow";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter1/cut13-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: #ffffff;
  background-image: linear-gradient(#73b7c260 1.1px, transparent 1.1px),
    linear-gradient(to right, #73b7c260 1.1px, #ffffff 1.1px);
  background-size: 22px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
`;

const Chat = styled(motion.div)`
  width: 40%;
  position: absolute;

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

const Chat1 = styled(Chat)`
  top: 10%;
  left: 20px;
`;

const Chat2 = styled(Chat)`
  bottom: 10%;
  right: 20px;
`;

const CutContainer = styled.div`
  width: 70%;

  & > img {
    width: 100%;
  }
`;

const MsgWindowWrapper = styled.div`
  width: 50%;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(-180deg);
  opacity: 0.5;

  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;

const Cut13 = () => {
  return (
    <Base>
      <Chat1
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <img src={BUBBLE3URL} alt="말풍선1" />
        <p>이건 뭐지? 승현...이면 우리 누나인데</p>
      </Chat1>

      <CutContainer>
        <img src={IMG1URL} alt="메시창 앞 뭉게" />
      </CutContainer>
      <MsgWindowWrapper>
        <MsgWindow />
      </MsgWindowWrapper>
      <Chat2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
        transition={{ delay: 0.2 }}
      >
        <img src={BUBBLE3URL} alt="말풍선2" />
        <p>'진행 중인 작업을 완료해라'라...</p>
      </Chat2>
      <StepBtn />
    </Base>
  );
};

export default Cut13;
