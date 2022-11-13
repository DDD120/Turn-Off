import React from "react";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import styled from "styled-components";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Chat = styled(motion.div)`
  width: 50%;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 70%;
`;

const Act1Cut6 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={452}
          height={140}
          src="../../../images/bubble/bubble-6.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>···</DefaultText>
      </Chat>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.98, 1] }}
      >
        <StaticImage
          width={462}
          height={331}
          src="../../../images/act1/act1_6-1.webp"
          alt="확대된 승현을 쳐다보는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Act1Cut6;
