import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut25-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
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
`;

const Cut25 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
        <DefaultText>생각하니까 또 눈물이 나</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage
          width={414}
          height={362}
          src={IMG1URL}
          alt="훌쩍이는 뭉게"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut25;
