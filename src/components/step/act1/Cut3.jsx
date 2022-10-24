import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 70%;
`;

const Cut3 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <DefaultImage width={327} height={228} src={BUBBLE3URL} alt="말풍선" />
        <DefaultText>그 중에서도 가장 고통스러운 사람은...</DefaultText>
      </Chat>

      <StepBtn />
    </Base>
  );
};

export default Cut3;
