import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CutContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const Chapter4Cut4 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <StaticImage
          width={360}
          height={460}
          src="../../../../images/act2/chapter4/chapter4_4-1.webp"
          alt="영상을 클릭하는 뭉게 손가락"
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
        <DefaultText>이 영상은 재밌어 보이는데 하나만 볼까...</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Chapter4Cut4;
