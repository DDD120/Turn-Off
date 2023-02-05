import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
  position: relative;

  p {
    position: absolute;
    top: 60%;
    right: 20%;
    transform: translateY(-50%);
  }
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;
`;

const Chapter5Cut3 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={346}
          height={224}
          loading="eager"
          src="../../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>
          어라 불안정 하다고? 어떡하지? 이거 누르면 해결되나?
        </DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={500}
          height={199}
          loading="eager"
          src="../../../../images/act2/chapter5/chapter5_3-1.webp"
          alt="당황하는 뭉게"
          layout="constrained"
          placeholder="none"
        />
        <p>으아아</p>
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Chapter5Cut3;
