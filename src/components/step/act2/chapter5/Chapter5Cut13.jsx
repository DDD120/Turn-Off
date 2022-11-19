import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Chat = styled(motion.div)`
  width: 50%;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 70%;
`;

const Chapter5Cut13 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          width={346}
          height={224}
          src="../../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>비우기 성공!</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={500}
          height={462}
          src="../../../../images/act2/chapter5/chapter5_13-1.webp"
          alt="기쁜 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Chapter5Cut13;
