import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CutContainer = styled.div`
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Chat = styled(motion.div)`
  position: relative;
  margin-bottom: 10px;
`;

const Chapter3Cut9 = () => {
  return (
    <Base>
      <CutContainer>
        <Chat
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [-10, 0] }}
        >
          <StaticImage
            width={346}
            height={224}
            src="../../../../images/bubble/bubble-4.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <DefaultText>잘한 건가...?</DefaultText>
        </Chat>
        <StaticImage
          width={369}
          height={745}
          src="../../../../images/act2/chapter3/chapter3_8-1.webp"
          alt="의문이 드는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  );
};

export default Chapter3Cut9;
