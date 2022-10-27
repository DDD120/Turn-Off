import React from "react";
import IMG1URl from "images/act2/chapter4/cut41-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import styled from "styled-components";
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
  gap: 10px;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const CutContainer = styled(motion.div)`
  width: 90%;
`;

const Cut41 = () => {
  return (
    <Base>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage
          width={500}
          height={307}
          src={IMG1URl}
          alt="어리둥절한 뭉게"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage width={327} height={228} src={BUBBLE3URL} alt="말풍선" />
        <DefaultText>음... 모르는 말이 가득하네</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut41;
