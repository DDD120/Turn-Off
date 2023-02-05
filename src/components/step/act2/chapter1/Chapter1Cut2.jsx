import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  position: relative;
  width: 90%;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  padding: 2px 4px;
  background-color: #ffffff60;

  @media only screen and (max-width: 420px) {
    font-size: 0.8rem;
    right: 10px;
  }
`;

const Chapter1Cut2 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <StaticImage
          width={500}
          height={208}
          loading="eager"
          src="../../../../images/act2/chapter1/chapter1_2-1.webp"
          alt="위를 올려다보는 뭉게"
          layout="constrained"
          placeholder="none"
        />
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ delay: 0.4 }}
        >
          <p>...그나저나 여긴 어디지 </p>
        </Text>
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Chapter1Cut2;
