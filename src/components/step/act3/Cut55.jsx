import React, { useState } from "react";
import styled from "styled-components";
import IMG1URL from "images/act3/cut55-1.webp";
import IMG2URL from "images/act3/cut55-2.webp";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CutContainer = styled(motion.div)`
  cursor: pointer;
  width: 90%;

  img {
    width: 100%;
  }
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
      >
        <img src={isClicked ? IMG2URL : IMG1URL} alt="" />
      </CutContainer>
      {isClicked && <StepBtn />}
    </Base>
  );
};

export default Cut55;
