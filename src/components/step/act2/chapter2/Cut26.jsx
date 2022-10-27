import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import IMG1URL from "images/act2/chapter2/cut26-1.webp";
import BUBBLE5URL from "images/bubble/bubble-5.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Chat = styled(motion.div)`
  width: 80%;
  position: relative;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
`;

const Cut26 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <DefaultImage
          width={500}
          height={294}
          src={IMG1URL}
          alt="설레하는 뭉게"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <DefaultImage width={306} height={209} src={BUBBLE5URL} alt="말풍선" />
        <DefaultText>
          누나가 문자 못봤나 보네... 내가 대신 답해줘도 되겠지?
        </DefaultText>
      </Chat>

      <StepBtn />
    </Base>
  );
};

export default Cut26;
