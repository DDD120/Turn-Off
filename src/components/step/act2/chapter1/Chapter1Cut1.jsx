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

const Chat = styled.div`
  position: absolute;
  left: 50%;
  bottom: -60px;
  transform: translate(-50%);
  max-width: 270px;
`;

const CutContainer = styled(motion.div)`
  position: relative;
  width: 90%;
  margin: 0 auto;

  & > p {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    text-align: center;

    @media only screen and (max-width: 420px) {
      font-size: 0.8rem;
      right: 10px;
    }
  }
`;

const Chapter1Cut1 = () => {
  return (
    <Base>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <StaticImage
          width={500}
          height={498}
          loading="eager"
          src="../../../../images/act2/chapter1/chapter1_1-1.webp"
          alt="어리둥절한 뭉게"
          layout="constrained"
          placeholder="none"
        />
        <p>
          분명 맛있는 거 <br /> 먹고 있었는데...
        </p>
        <Chat>
          <StaticImage
            width={346}
            height={224}
            loading="eager"
            src="../../../../images/bubble/bubble-4.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <DefaultText>사람...?</DefaultText>
        </Chat>
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Chapter1Cut1;
