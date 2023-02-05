import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

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

const Act1Cut16 = () => {
  return (
    <Base>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <Chat1>
          <StaticImage
            width={346}
            height={224}
            loading="eager"
            src="../../../images/bubble/bubble-4.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <DefaultText>마음대로 자고 일어날 수 있어서 부러워...</DefaultText>
        </Chat1>
      </Animation>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ delay: 0.2 }}
      >
        <StaticImage
          width={500}
          height={499}
          loading="eager"
          src="../../../images/act1/act1_16-1.webp"
          alt="승현과 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ delay: 0.4 }}
      >
        <Chat2>
          <StaticImage
            width={346}
            height={224}
            loading="eager"
            src="../../../images/bubble/bubble-4.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <DefaultText>나도 뭉게처럼 하루종일 잤으면 좋겠다</DefaultText>
        </Chat2>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Act1Cut16;
