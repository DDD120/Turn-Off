import React from "react";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #fff 50%, #a4cfff 100%);
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;
`;

const Cut62 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
        <DefaultText>그럼 오늘 하루도 힘차게 시작해볼까?</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut62;
