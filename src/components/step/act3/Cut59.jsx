import React from "react";
import IMG1URL from "images/act3/cut59-1.webp";
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
  width: 70%;
`;

const Cut59 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage width={327} height={228} src={BUBBLE3URL} alt="" />
        <DefaultText>아직 내 옆에서 자고있네</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage
          width={375}
          height={297}
          src={IMG1URL}
          alt="곤히 자고 있는 뭉게"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut59;
