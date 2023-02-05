import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const CutContainer = styled.div`
  width: 50%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const Act3Cut2 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          width={346}
          height={224}
          loading="eager"
          src="../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>으음 잘잤다</DefaultText>
      </Chat>

      <CutContainer>
        <StaticImage
          width={253}
          height={233}
          loading="eager"
          src="../../../images/act3/act3_2-1.webp"
          alt="기지개 켜는 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Act3Cut2;
