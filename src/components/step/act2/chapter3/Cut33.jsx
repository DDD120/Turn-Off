import React from "react";
import styled from "styled-components";
import IMG1URL from "images/act2/chapter3/cut33-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
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
  width: 60%;

  p {
    span {
      font-size: 0.8rem;
    }
  }
`;

const CutContainer = styled(motion.div)`
  width: 90%;
`;

const Cut33 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
        <DefaultText>
          자주 보던 화면이네 <br /> <span>(옆에서 자주 구경했던...)</span>
        </DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage
          width={408}
          height={253}
          src={IMG1URL}
          alt="사진 편집 프로그램 킨 채 잠자는 승현"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut33;
