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

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const CutContainer = styled.div`
  width: 70%;
`;

const Act3Cut6 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          width={452}
          height={140}
          src="../../../images/bubble/bubble-6.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>귀여워 ㅎㅎ</DefaultText>
      </Chat>
      <CutContainer>
        <StaticImage
          width={498}
          height={555}
          src="../../../images/act3/act3_6-1.webp"
          alt="자는 뭉게 쓰다듬는 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Act3Cut6;
