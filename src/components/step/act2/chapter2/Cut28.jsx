import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import IMG1URL from "images/act2/chapter2/cut28-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.div`
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
        <DefaultImage
          width={500}
          height={715}
          src={IMG1URL}
          alt="이마 땀 닦는 뭉게"
        />
      </CutContainer>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Chat>
          <DefaultImage
            width={327}
            height={228}
            src={BUBBLE3URL}
            alt="맖풍선"
          />
          <DefaultText>휴... 다 썼다</DefaultText>
        </Chat>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Cut28;
