import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut29-1.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 60px;
`;

const CutContainer = styled(motion.div)`
  width: 80%;

  & > img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)``;

const Cut29 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <p>강아지치곤 이정도면 잘 쓴 것 같네... 훗</p>
      </Chat>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <img src={IMG1URL} alt="뿌듯해하는 뭉게" />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut29;
