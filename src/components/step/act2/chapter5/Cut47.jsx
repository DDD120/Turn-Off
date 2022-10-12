import React from "react";
import StepBtn from "components/common/StepBtn";
import { FcPlus } from "react-icons/fc";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";
import styled from "styled-components";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import { motion } from "framer-motion";

const Base = styled.div`
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

  img {
    width: 100%;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    text-align: center;
  }
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
        <img src={BUBBLE3URL} alt="말풍선" />
        <p>이제 마지막 하나 남았어!</p>
      </Chat>
      <StepBtn />
    </Base>
  );
};

export default Cut47;
