import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import MsgWindow from "components/step/act2/chapter1/MsgWindow";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter1/cut13-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

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
`;

const Animation = styled(motion.div)`
  width: 90%;
  position: absolute;
`;

const Chat = styled.div`
  max-width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Chat1 = styled(Chat)`
  transform: translateX(calc(-50% - 100px)) translateY(calc(-50% - 200px));
`;

const Chat2 = styled(Chat)`
  transform: translateX(calc(-50% + 100px)) translateY(calc(-50% + 200px));
`;

const CutContainer = styled.div`
  width: 70%;
`;

const MsgWindowWrapper = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotateY(-180deg);
  opacity: 0.5;

  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;

const Cut13 = () => {
  return (
    <Base>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Chat1>
          <DefaultImage
            width={327}
            height={228}
            src={BUBBLE3URL}
            alt="말풍선1"
          />
          <DefaultText>이건 뭐지? 승현...이면 우리 누나인데</DefaultText>
        </Chat1>
      </Animation>

      <CutContainer>
        <DefaultImage
          width={496}
          height={619}
          src={IMG1URL}
          alt="메시창 앞 뭉게"
        />
      </CutContainer>
      <MsgWindowWrapper>
        <MsgWindow />
      </MsgWindowWrapper>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
        transition={{ delay: 0.2 }}
      >
        <Chat2>
          <DefaultImage
            width={327}
            height={228}
            src={BUBBLE3URL}
            alt="말풍선2"
          />
          <DefaultText>'진행 중인 작업을 완료해라'라...</DefaultText>
        </Chat2>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Cut13;
