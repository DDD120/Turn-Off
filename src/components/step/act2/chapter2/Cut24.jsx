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
  gap: 10px;
`;

const CutContainer = styled(motion.div)`
  width: 70%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const Cut24 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <StaticImage
          width={500}
          height={583}
          src="../../../../images/act2/chapter2/cut24-1.webp"
          alt="뭉게를 안고 있는 승현 어머니"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <StaticImage
          width={327}
          height={228}
          src="../../../../images/bubble/bubble-3.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>품이 참 따뜻했었는데...</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut24;
