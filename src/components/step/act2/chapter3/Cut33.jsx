import React from "react";
import styled from "styled-components";
import IMG1URL from "images/act2/chapter3/cut33-1.webp";
import BUBBLE4URL from "images/bubble/bubble-4.webp";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";

const Base = styled.div`
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

  img {
    width: 100%;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
    span {
      font-size: 0.8rem;
    }
  }
`;

const CutContainer = styled(motion.div)`
  width: 90%;

  img {
    width: 100%;
  }
`;

const Cut33 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={BUBBLE4URL} alt="말풍선" />
        <p>
          자주 보던 화면이네 <br /> <span>(아마 누나가 공부하는 )</span>
        </p>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <img src={IMG1URL} alt="사진 편집 프로그램 킨 채 잠자는 승현" />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Cut33;
