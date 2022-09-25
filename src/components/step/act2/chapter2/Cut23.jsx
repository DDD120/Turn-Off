import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut23-1.webp";
import BUBBLE2URL from "images/bubble/bubble-2.webp";

const Base = styled.div`
  padding: 10px;
  align-self: stretch;
  flex: 1;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 10%;

  & > img {
    width: 100%;
  }

  & > p {
    position: absolute;
    top: 50%;
    right: 24%;
  }
`;

const Chat = styled(motion.div)`
  width: 50%;
  position: absolute;
  left: 20%;
  top: 54%;
  text-align: center;
  word-break: keep-all;

  & > img {
    width: 100%;
  }

  & > p:nth-of-type(1) {
    width: 30%;
    position: absolute;
    top: 14%;
    left: 14%;
  }

  & > p:nth-of-type(2) {
    width: 30%;
    position: absolute;
    bottom: 30%;
    right: 22%;
  }

  @media only screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
`;

const Cut23 = () => {
  return (
    <Base>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={IMG1URL} alt="감동받은 표정의 뭉게" />
        <p>힝...</p>
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <img src={BUBBLE2URL} alt="말풍선" />
        <p>어머니... 못본지 넘 오래 됐어</p>
        <p>보고싶다</p>
      </Chat>

      <StepBtn />
    </Base>
  );
};

export default Cut23;
