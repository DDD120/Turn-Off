import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
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

const Act1Cut10 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          src="../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="fullWidth"
          placeholder="none"
        />
        <DefaultText>안돼, 아까 간식 많이 먹었잖아.</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={500}
          height={355}
          src="../../../images/act1/act1_10-1.webp"
          alt="뭉게를 쓰다듬는 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Act1Cut10;
