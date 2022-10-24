import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import IMG1URL from "images/act1/cut4-1.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
  margin-bottom: 10px;
`;

const ChatText = styled(DefaultText)`
  font-size: 1.2rem;
`;

const CutContainer = styled.div`
  position: relative;
  width: 80%;
`;

const Text = styled.span`
  display: inline-block;
  padding: 2px 4px;
  background-color: #ffffffdd;

  &:nth-of-type(1) {
    position: absolute;
    top: 40%;
    left: 20px;
  }

  &:nth-of-type(2) {
    position: absolute;
    top: 60%;
    right: 20px;
  }
`;

const Cut4 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 1], y: [-10, 10, 0] }}
      >
        <DefaultImage width={346} height={224} src={BUBBLE4URL} alt="말풍선" />
        <ChatText>바로 나일 거다</ChatText>
      </Chat>

      <CutContainer>
        <DefaultImage
          width={500}
          height={415}
          src={IMG1URL}
          alt="누워 있는 승현"
        />
        <Text>하...</Text>
        <Text>망했다...</Text>
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut4;
