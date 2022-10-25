import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut24-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const CutContainer = styled(motion.div)`
  width: 70%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const Cut24 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <DefaultImage
          width={500}
          height={583}
          src={IMG1URL}
          alt="뭉게를 안고 있는 승현 어머니"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <DefaultImage width={327} height={228} src={BUBBLE3URL} alt="말풍선" />
        <DefaultText>품이 참 따뜻했었는데...</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut24;
