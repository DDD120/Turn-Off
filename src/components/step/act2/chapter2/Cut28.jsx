import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
`;

const Animation = styled(motion.div)`
  width: 100%;
  position: absolute;
`;

const Chat = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 70%);
`;

const Cut28 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <StaticImage
          width={500}
          height={715}
          src="../../../../images/act2/chapter2/cut28-1.webp"
          alt="이마 땀 닦는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Chat>
          <StaticImage
            width={327}
            height={228}
            src="../../../../images/bubble/bubble-3.webp"
            alt="맖풍선"
            layout="constrained"
            placeholder="none"
          />
          <DefaultText>휴... 다 썼다</DefaultText>
        </Chat>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Cut28;
