import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import IMG1URL from "images/act2/chapter2/cut28-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 80%;

  & > img {
    width: 100%;
  }
`;

const Animation = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 65%;
`;

const Chat = styled.div`
  width: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  & > img {
    width: 100%;
  }

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
  }
`;

const Cut28 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <img src={IMG1URL} alt="이마 땀 닦는 뭉게" />
      </CutContainer>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Chat>
          <img src={BUBBLE3URL} alt="맖풍선" />
          <p>휴... 다 썼다</p>
        </Chat>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Cut28;
