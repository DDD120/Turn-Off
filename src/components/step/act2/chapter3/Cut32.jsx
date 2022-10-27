import React from "react";
import styled from "styled-components";
import IMG1URL from "images/act2/chapter3/cut32-1.webp";
import BUBBLE6URL from "images/bubble/bubble-6.webp";
import StepBtn from "components/common/StepBtn";
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
  gap: 20px;
`;

const CutContainer = styled(motion.div)`
  width: 90%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;
`;

const Cut32 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <DefaultImage width={452} height={140} src={BUBBLE6URL} alt="말풍선" />
        <DefaultText>어라 저 화면도...</DefaultText>
      </Chat>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <DefaultImage
          width={500}
          height={251}
          src={IMG1URL}
          alt="무언가 깨달은 표정인 뭉게"
        />
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut32;
