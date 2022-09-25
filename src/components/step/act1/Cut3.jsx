import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import BUBBLE3URL from "images/bubble/bubble-3.webp";

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;
  & > img {
    width: 100%;
  }

  & > p {
    word-break: keep-all;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Cut3 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <img src={BUBBLE3URL} alt="말풍선" />
        <p>그 중에서도 가장 고통스러운 사람은....</p>
      </Chat>

      <StepBtn />
    </Base>
  );
};

export default Cut3;
