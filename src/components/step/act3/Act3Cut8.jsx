import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #fff 50%, #a4cfff 100%);
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;
`;

const Act3Cut8 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <StaticImage
          width={346}
          height={224}
          src="../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>그럼 오늘 하루도 힘차게 시작해볼까?</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Act3Cut8;
