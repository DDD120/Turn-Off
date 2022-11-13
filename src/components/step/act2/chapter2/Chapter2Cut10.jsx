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
  flex-direction: column;
  gap: 10px;
`;

const CutContainer = styled(motion.div)`
  width: 90%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 90%;
`;

const Cut30 = () => {
  return (
    <Base>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={500}
          height={253}
          src="../../../../images/act2/chapter2/chapter2_10-1.webp"
          alt="마음에 들어하는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>

      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={452}
          height={140}
          src="../../../../images/bubble/bubble-6.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>
          아무튼 이렇게 같은 언어로 마음을 전할 수 있다니 좋다
        </DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut30;
