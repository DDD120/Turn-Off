import React from "react";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = styled(motion.div)`
  span {
    font-size: 1.4rem;
  }
`;

const Act1Cut12 = () => {
  return (
    <Base>
      <Animation
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: "Infinity" }}
      >
        <span>20 분 후</span>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Act1Cut12;
