import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
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
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const Act3Cut4 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <StaticImage
          width={329}
          height={159}
          src="../../../images/bubble/bubble-1.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>어?</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Act3Cut4;
