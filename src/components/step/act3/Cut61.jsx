import React from "react";
import IMG1URL from "images/act3/cut61-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CutContainer = styled.div`
  width: 90%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const Cut61 = () => {
  return (
    <Base>
      <CutContainer>
        <DefaultImage
          width={500}
          height={241}
          src={IMG1URL}
          alt="옆모습 승현"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage width={327} height={228} src={BUBBLE3URL} alt="말풍선" />
        <DefaultText>
          오랜만에 개운하게 일어난 것 같아. 피곤한 것도 없고
        </DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut61;
