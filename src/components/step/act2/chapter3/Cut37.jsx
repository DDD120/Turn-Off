import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import BUBBLE1URL from "images/bubble/bubble-1.webp";
import { motion } from "framer-motion";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  p {
    span {
      font-size: 0.8rem;
    }
  }
`;

const Cut37 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <DefaultImage width={329} height={159} src={BUBBLE1URL} alt="말풍선" />
        <DefaultText>음......</DefaultText>
      </Chat>

      <StepBtn />
    </Base>
  );
};

export default Cut37;
