import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import { motion } from "framer-motion";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  padding: 10px;
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to top, #fff, #001220);
`;

const Chat = styled(motion.div)`
  position: relative;
  margin: 0 auto;
  width: 60%;
`;

const Cut35 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <DefaultImage width={327} height={228} src={BUBBLE3URL} alt="말풍선" />
        <DefaultText>모르겠다! 일단 한 번 해보면 알겠지!</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut35;
