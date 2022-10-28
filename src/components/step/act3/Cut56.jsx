import React from "react";
import IMG1URL from "images/act3/cut56-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

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

const Cut56 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <DefaultText>으음 잘잤다</DefaultText>
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
      </Chat>

      <CutContainer>
        <DefaultImage
          width={253}
          height={233}
          src={IMG1URL}
          alt="기지개 켜는 승현"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut56;
