import React from "react";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";

const Base = styled.div`
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #fff 50%, #a4cfff 100%);
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;

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

const Cut62 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>힘차게 시작해볼까?</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut62;
