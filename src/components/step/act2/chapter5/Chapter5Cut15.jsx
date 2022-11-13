import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

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

const CutContainer = styled(motion.div)`
  width: 60%;
`;

const Chat = styled(motion.div)`
  width: 50%;
  position: relative;
`;

const Chapter5Cut15 = () => {
  return (
    <Base>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={296}
          height={364}
          src="../../../../images/act2/chapter5/chapter5_15-1.webp"
          alt="기쁜 뭉게"
          layout="fullWidth"
          placeholder="none"
        />
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <StaticImage
          width={327}
          height={228}
          src="../../../images/bubble/bubble-3.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>그럼 이제 진짜로 컴퓨터를 종료할 수 있겠지?</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Chapter5Cut15;
