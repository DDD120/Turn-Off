import React from "react";
import IMG1URL from "images/act3/cut59-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
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
`;

const CutContainer = styled(motion.div)`
  width: 70%;

  img {
    width: 100%;
  }
`;

const Cut59 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={BUBBLE3URL} alt="" />
        <p>아직 내 옆에서 자고있네</p>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={IMG1URL} alt="곤히 자고 있는 뭉게" />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut59;
