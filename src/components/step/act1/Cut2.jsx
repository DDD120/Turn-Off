import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import Bubble3URL from "images/bubble/bubble-3.webp";
import IMG1URL from "images/act1/cut2-1.webp";
import IMG2URL from "images/act1/cut2-2.webp";

const Base = styled.div`
  padding: 10px;
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to top, #fff, #001220);
`;

const CutContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 50%;
  }
`;

const Chat = styled.div`
  position: relative;
  width: 50%;
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

const Cut2 = () => {
  return (
    <Base>
      <div>
        <CutContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
        >
          <img src={IMG1URL} alt="글쓰는 장면" />
          <Chat>
            <img src={Bubble3URL} alt="말풍선" />
            <p>그들은 열정을 불태우면서도</p>
          </Chat>
        </CutContainer>
        <CutContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ delay: 0.5 }}
        >
          <Chat>
            <img src={Bubble3URL} alt="말풍선" />
            <p>동시에 고통을 받기도 한다.</p>
          </Chat>
          <img src={IMG2URL} alt="글쓰는 장면" />
        </CutContainer>
      </div>
      <StepBtn />
    </Base>
  );
};

export default Cut2;
