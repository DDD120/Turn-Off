import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter1/cut11-1.webp";
import { DefaultImage } from "components/common/GlobalStyle";

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

const Cut11 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ delay: 0.4 }}
        >
          <p>...그나저나 여긴 어디지 </p>
        </Text>
        <DefaultImage
          width={500}
          height={208}
          src={IMG1URL}
          alt="위를 올려다보는 뭉게"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut11;
