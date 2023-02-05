import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import MsgWindow from "components/step/act2/chapter1/MsgWindow";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
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

const Chapter1Cut4 = () => {
  return (
    <Base>
      <CutContainer>
        <StaticImage
          width={496}
          height={619}
          loading="eager"
          src="../../../../images/act2/chapter1/chapter1_4-1.webp"
          alt="메시창 앞 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <MsgWindowWrapper>
        <MsgWindow />
      </MsgWindowWrapper>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Chat1>
          <StaticImage
            width={327}
            height={228}
            loading="eager"
            src="../../../../images/bubble/bubble-3.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <DefaultText>이건 뭐지? 승현...이면 우리 누나인데</DefaultText>
        </Chat1>
      </Animation>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
        transition={{ delay: 0.2 }}
      >
        <Chat2>
          <StaticImage
            width={327}
            height={228}
            loading="eager"
            src="../../../../images/bubble/bubble-3.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <DefaultText>'진행 중인 작업을 완료해라'라...</DefaultText>
        </Chat2>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Chapter1Cut4;
