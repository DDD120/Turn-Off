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
  flex-direction: column;
  gap: 20px;
`;

const CutContainer = styled.div`
  width: 70%;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;
`;

const Act1Cut5 = () => {
  return (
    <Base>
      <CutContainer>
        <StaticImage
          width={500}
          height={409}
          src="../../../images/act1/act1_5-1.webp"
          alt="승현을 쳐다보는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <StaticImage
          width={346}
          height={224}
          src="../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>피곤한데 잠은 오지 않아서 괴롭다... 으으.</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Act1Cut5;
