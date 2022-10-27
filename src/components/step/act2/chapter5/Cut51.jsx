import React from "react";
import StepBtn from "components/common/StepBtn";
import IMG1URL from "images/act2/chapter5/cut51-1.webp";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultImage } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  background-color: #ffffff;
  background-image: linear-gradient(#73b7c260 1.1px, transparent 1.1px),
    linear-gradient(to right, #73b7c260 1.1px, #ffffff 1.1px);
  background-size: 22px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const CutContainer = styled.div`
  width: 60%;
  text-align: center;
`;

const Chat = styled(motion.p)`
  display: inline-block;
  margin-bottom: 40px;
  font-size: 1.4rem;
`;

const Cut51 = () => {
  return (
    <Base>
      <CutContainer>
        <Chat
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [-10, 0] }}
        >
          됐다!
        </Chat>
        <DefaultImage
          width={416}
          height={484}
          src={IMG1URL}
          alt="밝은 표정의 뭉게"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut51;
