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
  flex-direction: column;
  gap: 20px;
`;

const Chat = styled(motion.div)`
  width: 80%;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
`;

const Chapter2Cut6 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <StaticImage
          width={500}
          height={294}
          src="../../../../images/act2/chapter2/chapter2_6-1.webp"
          alt="설레하는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          src="../../../../images/bubble/bubble-5.webp"
          alt="말풍선"
          layout="fullWidth"
          placeholder="none"
        />
        <DefaultText>
          누나가 문자 못봤나 보네... 내가 대신 답해줘도 되겠지?
        </DefaultText>
      </Chat>

      <StepBtn />
    </Base>
  );
};

export default Chapter2Cut6;
