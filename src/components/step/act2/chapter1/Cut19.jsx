import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import BUBBLE2URL from "images/bubble/bubble-2.webp";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import IMG1URL from "images/act2/chapter1/cut19-1.webp";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Chat = styled(motion.div)`
  width: 45%;
  position: absolute;

  & > img {
    width: 100%;
  }

  & > p {
    position: absolute;

    text-align: center;
    word-break: keep-all;
  }
`;

const Chat1 = styled(Chat)`
  top: 5%;
  left: 10%;
  z-index: 1;

  & > p:nth-of-type(1) {
    width: 20%;
    top: 10%;
    left: 20%;
  }

  & > p:nth-of-type(2) {
    width: 50%;
    bottom: 20%;
    right: 10%;
  }
`;

const Chat2 = styled(Chat)`
  bottom: 10%;
  right: 12%;

  & > p {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CutContainer = styled.div`
  width: 80%;
  position: relative;
  & > img {
    width: 100%;
  }

  & > span {
    position: absolute;
    top: 60%;
    right: 30%;
  }
`;

const Cut19 = () => {
  return (
    <Base>
      <Chat1
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <img src={BUBBLE2URL} alt="말풍선" />
        <p>뭐가 이렇게 많아...</p>
        <p>별로 중요한 내용은 없는 것 같은데</p>
      </Chat1>
      <CutContainer>
        <img src={IMG1URL} alt="당황하는 뭉게" />
        <span>헉...</span>
      </CutContainer>
      <Chat2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <img src={BUBBLE3URL} alt="말풍선" />
        <p>그냥 다 지워도 되겠지? </p>
      </Chat2>
      <StepBtn />
    </Base>
  );
};

export default Cut19;
