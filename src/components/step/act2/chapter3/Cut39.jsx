import React from "react";
import IMG1URL from "images/act2/chapter3/cut39-1.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
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

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  p {
    span {
      font-size: 0.8rem;
    }
  }
`;

const CutContainer = styled(motion.div)`
  width: 90%;
`;

const Cut39 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage width={327} height={228} src={BUBBLE3URL} alt="말풍선" />
        <DefaultText>나중에 또 수정할 수 있겠지... 뭐</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage
          width={500}
          height={318}
          src={IMG1URL}
          alt="머리를 긁적이는 뒷모습의 뭉게"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut39;
