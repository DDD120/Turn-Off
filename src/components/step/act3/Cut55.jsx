import React, { useState } from "react";
import styled from "styled-components";
import IMG1URL from "images/act3/cut55-1.webp";
import IMG2URL from "images/act3/cut55-2.webp";
import StepBtn from "components/common/StepBtn";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CutContainer = styled.div``;

const Cut55 = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Base>
      <CutContainer>
        <img src={isClicked ? IMG2URL : IMG1URL} alt="" />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut55;
