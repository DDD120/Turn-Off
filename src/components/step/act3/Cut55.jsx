import React, { useState } from "react";
import styled, { css } from "styled-components";
import IMG1URL from "images/act3/cut55-1.webp";
import IMG2URL from "images/act3/cut55-2.webp";
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

  ${({ isClicked }) =>
    !isClicked &&
    css`
      pointer-events: auto;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 20px 4px #73b8c2a2;
      }
    `}
`;

const Cut55 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickImg = () => {
    setIsClicked(true);
  };

  return (
    <Base>
      <CutContainer
        onClick={handleClickImg}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        isClicked={isClicked}
      >
        <DefaultImage
          width={500}
          height={412}
          src={isClicked ? IMG2URL : IMG1URL}
          alt=""
        />
      </CutContainer>
      {isClicked && <StepBtn />}
    </Base>
  );
};

export default Cut55;
