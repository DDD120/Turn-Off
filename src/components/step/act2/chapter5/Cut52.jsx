import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CutContainer = styled.div`
  width: 90%;
`;

const Chat = styled(motion.div)`
  width: 50%;
  z-index: 1;
`;

const Chat1 = styled(Chat)`
  margin-left: auto;
  transform: translateY(20px);
`;
const Chat2 = styled(Chat)`
  margin-right: auto;
  transform: translateY(-20px);
`;

const Cut52 = () => {
  return (
    <Base>
      <Chat1 initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={346}
          height={224}
          src="../../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>이제 다 완료했으니</DefaultText>
      </Chat1>

      <CutContainer>
        <StaticImage
          width={434}
          height={218}
          src="../../../../images/act2/chapter5/cut52-1.webp"
          alt="밝은 표정의 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Chat2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.2 }}
      >
        <StaticImage
          width={346}
          height={224}
          src="../../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>종료 할 수 있겠지?</DefaultText>
      </Chat2>

      <StepBtn />
    </Base>
  );
};

export default Cut52;
