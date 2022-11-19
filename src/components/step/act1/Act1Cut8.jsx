import React from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chat = styled(motion.div)`
  width: 50%;
  position: relative;
`;

const Act1Cut8 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <StaticImage
          src="../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="fullWidth"
          placeholder="none"
        />
        <DefaultText>음?</DefaultText>
      </Chat>

      <StepBtn />
    </Base>
  );
};

export default Act1Cut8;
