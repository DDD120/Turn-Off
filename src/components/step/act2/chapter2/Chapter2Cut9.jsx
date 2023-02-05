import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 50px;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
`;

const Chat = styled(motion.div)`
  width: 80%;
  position: relative;
`;

const Chapter2Cut9 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultText>강아지치곤 이정도면 잘 쓴 것 같네... 훗</DefaultText>
      </Chat>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <StaticImage
          width={453}
          height={433}
          loading="eager"
          src="../../../../images/act2/chapter2/chapter2_9-1.webp"
          alt="뿌듯해하는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Chapter2Cut9;
