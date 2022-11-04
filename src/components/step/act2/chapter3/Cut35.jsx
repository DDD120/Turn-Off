import React from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  padding: 10px;
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to top, #fff, #001220);
`;

const Chat = styled(motion.div)`
  position: relative;
  margin: 0 auto;
  width: 60%;
`;

const Cut35 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <StaticImage
          width={327}
          height={228}
          src="../../../../images/bubble/bubble-3.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>모르겠다! 일단 한 번 해보면 알겠지!</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut35;
