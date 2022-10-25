import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut21-1.webp";
import BUBBLE6URL from "images/bubble/bubble-6.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CutContainer = styled(motion.div)`
  width: 60%;
`;

const Chat = styled(motion.div)`
  width: 60%;
  position: relative;
  cursor: pointer;
`;

const Cut21 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <DefaultImage width={452} height={140} src={BUBBLE6URL} alt="말풍선" />
        <DefaultText>
          하나 완료! <br /> 그 다음엔...
        </DefaultText>
      </Chat>
      <CutContainer
        initial={{ opcity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <DefaultImage
          width={390}
          height={482}
          src={IMG1URL}
          alt="다음 앱을 누르려는 손"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut21;
