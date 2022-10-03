import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import IMG1URL from "images/act2/chapter4/cut44-1.webp";
import BUBBLE6URL from "images/bubble/bubble-6.webp";

const Base = styled.div`
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
  img {
    width: 100%;
  }
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 80%;
  & > img {
    width: 100%;
  }

  & > p {
    word-break: keep-all;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
        <img src={IMG1URL} alt="영상을 클릭하는 뭉게 손가락" />
        <Chat1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
        >
          <img src={BUBBLE6URL} alt="말풍선" />
          <p>...아냐 한 번 보면 계속 볼 것 같아 </p>
        </Chat1>
        <Chat2
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ delay: 0.2 }}
        >
          <img src={BUBBLE6URL} alt="말풍선" />
          <p>하던 일이나 마저 하자</p>
        </Chat2>
      </CutContainer>

      <StepBtn />
    </Base>
  );
};

export default Cut44;
