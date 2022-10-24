import React, { useState } from "react";
import styled, { css } from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act1/cut6-1.webp";
import IMG2URL from "images/act1/cut6-2.webp";
import { DefaultImage } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;

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

  p {
    position: absolute;
    top: 50%;
    right: 50px;
  }
`;

const Cut6 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickImg = () => {
    setIsClicked(true);
  };

  return (
    <Base>
      {!isClicked ? (
        <CutContainer
          onClick={handleClickImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          isClicked={isClicked}
        >
          <p>하...</p>
          <DefaultImage
            width={500}
            height={242}
            src={IMG1URL}
            alt="한숨 쉬는 승현"
          />
        </CutContainer>
      ) : (
        <>
          <CutContainer animate={{ opacity: [0, 1] }}>
            <p>(힐끔)</p>
            <DefaultImage
              width={500}
              height={242}
              src={IMG2URL}
              alt="밑을 쳐다보는 승현"
            />
          </CutContainer>
          <StepBtn />
        </>
      )}
    </Base>
  );
};

export default Cut6;
