import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Chat = styled(motion.div)`
  width: 50%;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
`;

const Act1Cut7 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={327}
          height={228}
          loading="eager"
          src="../../../images/bubble/bubble-3.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>내일 일찍 일어나야 하는데...</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={500}
          height={316}
          loading="eager"
          src="../../../images/act1/act1_7-1.webp"
          alt="피곤한 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Act1Cut7;
