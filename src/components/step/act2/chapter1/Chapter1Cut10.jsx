import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Animation = styled(motion.div)`
  width: 90%;
  position: absolute;
  z-index: 1;
`;

const Chat = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 46%;

  p {
    width: 90%;
    position: absolute;
    text-align: center;
    word-break: keep-all;
  }
`;

const Chat1 = styled(Chat)`
  transform: translateX(calc(-50% - 100px)) translateY(calc(-50% - 180px));
  z-index: 1;

  p:nth-of-type(1) {
    width: 20%;
    top: 30px;
    left: 30px;
  }

  p:nth-of-type(2) {
    width: 50%;
    bottom: 30px;
    right: 20px;
  }

  @media only screen and (max-width: 420px) {
    width: 50%;
    font-size: 0.8rem;
    transform: translateX(calc(-50% - 80px)) translateY(calc(-50% - 140px));
  }
`;

const Chat2 = styled(Chat)`
  transform: translateX(calc(-50% + 100px)) translateY(calc(-50% + 140px));

  @media only screen and (max-width: 420px) {
    transform: translateX(calc(-50% + 60px)) translateY(calc(-50% + 140px));
  }
`;

const CutContainer = styled.div`
  width: 80%;
  position: relative;

  span {
    position: absolute;
    top: 60%;
    right: 30%;
  }
`;

const Chapter1Cut10 = () => {
  return (
    <Base>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Chat1>
          <StaticImage
            width={324}
            height={386}
            src="../../../../images/bubble/bubble-2.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <p>뭐가 이렇게 많아...</p>
          <p>별로 중요한 내용은 없는 것 같은데</p>
        </Chat1>
      </Animation>

      <CutContainer>
        <StaticImage
          width={500}
          height={322}
          src="../../../../images/act2/chapter1/act1_10-1.webp"
          alt="당황하는 뭉게"
          layout="constrained"
          placeholder="none"
        />
        <span>헉...</span>
      </CutContainer>
      <Animation
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Chat2>
          <StaticImage
            width={327}
            height={228}
            src="../../../../images/bubble/bubble-3.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <DefaultText>그냥 다 지워도 되겠지? </DefaultText>
        </Chat2>
      </Animation>

      <StepBtn />
    </Base>
  );
};

export default Chapter1Cut10;
