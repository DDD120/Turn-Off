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
  gap: 10px;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const CutContainer = styled(motion.div)`
  width: 90%;
`;

const Cut41 = () => {
  return (
    <Base>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={500}
          height={307}
          src="../../../../images/act2/chapter4/cut41-1.webp"
          alt="어리둥절한 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={327}
          height={228}
          src="../../../../images/bubble/bubble-3.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>음... 모르는 말이 가득하네</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut41;
