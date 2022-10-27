import React from "react";
import StepBtn from "components/common/StepBtn";
import { FcPlus } from "react-icons/fc";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";
import styled from "styled-components";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import { motion } from "framer-motion";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;
`;

const CutContainer = styled.div``;

const Cut47 = () => {
  return (
    <Base>
      <CutContainer>
        <Bottom>
          <li>
            <IconWrapper hover={true}>
              <FcPlus />
            </IconWrapper>
            <Active />
          </li>
        </Bottom>
      </CutContainer>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <DefaultImage width={327} height={228} src={BUBBLE3URL} alt="말풍선" />
        <DefaultText>이제 마지막 하나 남았어!</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut47;
