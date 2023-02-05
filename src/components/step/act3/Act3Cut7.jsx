import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
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
  gap: 20px;
`;

const CutContainer = styled.div`
  width: 90%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const Act3Cut7 = () => {
  return (
    <Base>
      <CutContainer>
        <StaticImage
          width={500}
          height={241}
          loading="eager"
          src="../../../images/act3/act3_7-1.webp"
          alt="옆모습 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={327}
          height={228}
          loading="eager"
          src="../../../images/bubble/bubble-3.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>
          오랜만에 개운하게 일어난 것 같아. 피곤한 것도 없고
        </DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Act3Cut7;
