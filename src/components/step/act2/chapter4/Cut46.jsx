import React from "react";
import StepBtn from "components/common/StepBtn";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import IMG1URL from "images/act2/chapter4/cut46-1.webp";
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
  gap: 30px;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
`;

const Cut46 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
        <DefaultText>성공했다!</DefaultText>
      </Chat>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <DefaultImage
          width={419}
          height={387}
          src={IMG1URL}
          alt="기쁜 표정의 뭉게"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut46;
