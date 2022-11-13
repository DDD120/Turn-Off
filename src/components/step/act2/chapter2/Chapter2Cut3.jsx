import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = styled(motion.div)`
  width: 90%;
  position: absolute;
`;

const CutContainer = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);

  p {
    position: absolute;
    top: 50%;
    right: 24%;
  }
`;

const Chat = styled.div`
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  word-break: keep-all;

  p:nth-of-type(1) {
    width: 30%;
    position: absolute;
    top: 16%;
    left: 14%;
  }

  p:nth-of-type(2) {
    width: 30%;
    position: absolute;
    bottom: 30%;
    right: 22%;
  }

  @media only screen and (max-width: 360px) {
    font-size: 0.8rem;
    p:nth-of-type(1) {
      position: absolute;
      top: 14%;
    }
  }
`;

const Chapter2Cut3 = () => {
  return (
    <Base>
      <CutContainer>
        <StaticImage
          width={500}
          height={372}
          src="../../../../images/act2/chapter2/chapter2_3-1.webp"
          alt="울상인 표정의 뭉게"
          layout="constrained"
          placeholder="none"
        />
        <p>힝...</p>
      </CutContainer>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <Chat>
          <StaticImage
            width={324}
            height={386}
            src="../../../../images/bubble/bubble-2.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <p>어머니... 못본지 넘 오래 됐어</p>
          <p>보고싶다</p>
        </Chat>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Chapter2Cut3;
