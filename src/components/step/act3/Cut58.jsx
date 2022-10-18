import React from "react";
import BUBBLE1URL from "images/bubble/bubble-1.webp";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";

const Base = styled.div`
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  img {
    width: 100%;
  }

  p {
    word-break: keep-all;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Cut58 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <img src={BUBBLE1URL} alt="말풍선" />
        <p>어?</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut58;
