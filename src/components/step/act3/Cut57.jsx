import React from "react";
import IMG1URL from "images/act3/cut57-1.webp";
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
`;

const CutContainer = styled.div`
  width: 90%;
`;

const Chat = styled(motion.div)`
  width: 50%;
`;

const Chat1 = styled(Chat)`
  margin-left: auto;
  transform: translateY(20px);
`;
const Chat2 = styled(Chat)`
  margin-right: auto;
  transform: translateY(-20px);
`;

const Cut57 = () => {
  return (
    <Base>
      <Chat1 initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
        <DefaultText>언제 잠든 거지?</DefaultText>
      </Chat1>

      <CutContainer>
        <DefaultImage
          width={500}
          height={309}
          src={IMG1URL}
          alt="의아한 표정의 승현"
        />
      </CutContainer>
      <Chat2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.2 }}
      >
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
        <DefaultText>그래도 꽤 일찍 잠든 것 같은데</DefaultText>
      </Chat2>
      <StepBtn />
    </Base>
  );
};

export default Cut57;
