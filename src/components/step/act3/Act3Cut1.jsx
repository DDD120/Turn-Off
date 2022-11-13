import React, { useState } from "react";
import styled, { css } from "styled-components";
import IMG1URL from "images/act3/act3_1-1.webp";
import IMG2URL from "images/act3/act3_1-2.webp";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultImage } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CutContainer = styled(motion.div)`
  width: 90%;

  ${({ $isclicked }) =>
    !$isclicked &&
    css`
      pointer-events: auto;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 20px 4px #73b8c2a2;
      }
    `}
`;

const Act3Cut1 = () => {
  const [isclicked, setIsclicked] = useState(false);

  const handleClickImg = () => {
    setIsclicked(true);
  };

  return (
    <Base>
      <CutContainer
        onClick={handleClickImg}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        $isclicked={isclicked}
      >
        <DefaultImage
          width={500}
          height={412}
          src={isclicked ? IMG2URL : IMG1URL}
          alt={isclicked ? "눈을 뜬 승현" : "침대에 눈 감고 있는 승현"}
        />
      </CutContainer>
      {isclicked && <StepBtn />}
    </Base>
  );
};

export default Act3Cut1;
