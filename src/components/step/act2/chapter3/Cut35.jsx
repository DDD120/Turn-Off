import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import { motion } from "framer-motion";

const Base = styled.div`
  padding: 10px;
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to top, #fff, #001220);
`;

const Chat = styled(motion.div)`
  position: relative;
  margin: 0 auto;
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

const Cut35 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <img src={BUBBLE3URL} alt="말풍선" />
        <p>모르겠다! 일단 한 번 해보면 알겠지!</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut35;
