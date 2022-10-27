import React from "react";
import IMG1URL from "images/act2/chapter3/cut38-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CutContainer = styled.div`
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Chat = styled(motion.div)`
  position: relative;
  margin-bottom: 10px;
`;

const Cut38 = () => {
  return (
    <Base>
      <CutContainer>
        <Chat
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [-10, 0] }}
        >
          <DefaultImage
            width={346}
            height={224}
            src={BUBBLE4URL}
            alt="말풍선"
          />
          <DefaultText>잘한 건가...?</DefaultText>
        </Chat>
        <DefaultImage
          width={369}
          height={745}
          src={IMG1URL}
          alt="의문이 드는 뭉게"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut38;
