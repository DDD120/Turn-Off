import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CutContainer = styled(motion.div)`
  width: 40%;
`;

const Act1Cut11 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <StaticImage
          width={254}
          height={279}
          loading="eager"
          src="../../../images/act1/act1_11-1.webp"
          alt="'이게아닌데...'라고 생각하는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Act1Cut11;
