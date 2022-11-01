import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import ZzzAnimation from "./ZzzAnimation";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CutContainer = styled(motion.div)`
  width: 40%;
  z-index: 1;
  position: relative;
  margin-bottom: 50px;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const Cut7 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <ZzzAnimation />
        <StaticImage
          width={312}
          height={236}
          src="../../../images/act1/cut7-1.webp"
          alt="자는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0], scale: [0.8, 1] }}
      >
        <StaticImage
          width={306}
          height={209}
          src="../../../images/bubble/bubble-5.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>아주 푹 자고 있구먼</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut7;
