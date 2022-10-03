import React from "react";
import IMG1URL from "images/act2/chapter4/cut42-1.webp";
import BUBBLE7URL from "images/bubble/bubble-7.webp";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  img {
    width: 100%;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
  }

  @media only screen and (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

const CutContainer = styled.div`
  width: 90%;

  img {
    width: 100%;
  }
`;

const Cut42 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <img src={BUBBLE7URL} alt="말풍선" />
        <p>아마도 누나가 아까 봤었던 영상 목록인가봐</p>
      </Chat>
      <CutContainer>
        <img src={IMG1URL} alt="누워서 스마트폰으로 영상보는 승현" />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut42;
