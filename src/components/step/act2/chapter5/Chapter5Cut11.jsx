import React from "react";
import StepBtn from "components/common/StepBtn";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
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
  width: 60%;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 90%;
`;

const Chapter5Cut11 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={346}
          height={224}
          src="../../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="fullWidth"
          placeholder="none"
        />
        <DefaultText>
          휴지통은 어차피 비워야 하니까 내가 대신 해야겠다
        </DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={500}
          height={308}
          src="../../../../images/act2/chapter5/chapter5_11-1.webp"
          alt="쓰레기통 냄새를 맡는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Chapter5Cut11;
