import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import IMG1URL from "images/act2/chapter4/cut44-1.webp";
import BUBBLE6URL from "images/bubble/bubble-6.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  position: relative;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 80%;
`;

const Chat1 = styled(Chat)`
  position: absolute;
  top: -40px;
  right: -40px;
`;

const Chat2 = styled(Chat)`
  position: absolute;
  bottom: -40px;
  left: -40px;
`;

const Cut44 = () => {
  return (
    <Base>
      <CutContainer>
        <DefaultImage
          width={359}
          height={453}
          src={IMG1URL}
          alt="망설여하는 뭉게"
        />
        <Chat1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
        >
          <DefaultImage
            width={452}
            height={140}
            src={BUBBLE6URL}
            alt="말풍선"
          />
          <DefaultText>...아냐 한 번 보면 계속 볼 것 같아 </DefaultText>
        </Chat1>
        <Chat2
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ delay: 0.2 }}
        >
          <DefaultImage
            width={452}
            height={140}
            src={BUBBLE6URL}
            alt="말풍선"
          />
          <DefaultText>하던 일이나 마저 하자</DefaultText>
        </Chat2>
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut44;
