import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act1/cut8-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Animation = styled(motion.div)`
  width: 90%;
  position: absolute;
  z-index: 9;
`;

const Chat = styled.div`
  max-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Chat1 = styled(Chat)`
  transform: translateX(calc(-50% - 100px)) translateY(calc(-50% - 240px));
`;

const Chat2 = styled(Chat)`
  transform: translateX(calc(-50% + 100px)) translateY(calc(-50% + 240px));
`;

const CutContainer = styled(motion.div)`
  width: 90%;
`;

const Cut8 = () => {
  return (
    <Base>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <Chat1>
          <DefaultImage
            width={346}
            height={224}
            src={BUBBLE4URL}
            alt="말풍선"
          />
          <DefaultText>마음대로 자고 일어날 수 있어서 부러워...</DefaultText>
        </Chat1>
      </Animation>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ delay: 0.2 }}
      >
        <DefaultImage
          width={500}
          height={499}
          src={IMG1URL}
          alt="승현과 뭉게"
        />
      </CutContainer>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ delay: 0.4 }}
      >
        <Chat2>
          <DefaultImage
            width={346}
            height={224}
            src={BUBBLE4URL}
            alt="말풍선"
          />
          <DefaultText>나도 뭉게처럼 하루종일 잤으면 좋겠다</DefaultText>
        </Chat2>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Cut8;
