import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter1/cut10-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Chat = styled.div`
  position: absolute;
  left: 50%;
  bottom: -60px;
  transform: translate(-50%);
  max-width: 270px;
`;

const CutContainer = styled(motion.div)`
  position: relative;
  width: 90%;
  margin: 0 auto;

  & > p {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    text-align: center;

    @media only screen and (max-width: 420px) {
      font-size: 0.8rem;
      right: 10px;
    }
  }
`;

const Cut10 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <p>
          분명 맛있는 거 <br /> 먹고 있었는데...
        </p>
        <DefaultImage
          width={500}
          height={498}
          src={IMG1URL}
          alt="어리둥절한 뭉게"
        />
        <Chat>
          <DefaultImage
            width={346}
            height={224}
            src={BUBBLE4URL}
            alt="말풍선"
          />
          <DefaultText>사람...?</DefaultText>
        </Chat>
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut10;
