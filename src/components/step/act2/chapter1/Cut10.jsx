import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter1/cut10-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 10px;
`;

const Chat = styled.div`
  position: absolute;
  left: 50%;
  bottom: -60px;
  transform: translate(-50%);
  max-width: 270px;

  & > img {
    width: 100%;
  }

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    word-break: keep-all;
  }
`;

const CutContainer = styled(motion.div)`
  position: relative;
  margin: 0 auto;

  & > p {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    text-align: center;
  }

  & > img {
    width: 100%;
  }
`;

const Cut10 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <p>
          분명 맛있는 거 <br /> 먹고 있었는데...
        </p>
        <img src={IMG1URL} alt="어리둥절한 뭉게" />
        <Chat>
          <img src={BUBBLE4URL} alt="말풍선" />
          <p>사람...?</p>
        </Chat>
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut10;
