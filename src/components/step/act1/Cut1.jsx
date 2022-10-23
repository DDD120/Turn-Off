import React, { useState } from "react";
import BUBBLE2URL from "images/bubble/bubble-2.webp";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import { IMAGE, TEXT } from "components/common/GlobalStyle";

const Base = styled(motion.section)`
  align-self: stretch;
  position: relative;
  flex: 1;
  background-color: #a4cfff;
  transition: 0.3s;
  z-index: 1;
  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #001220;
    transition: opacity 0.5s linear;
    opacity: ${({ $isDark }) => ($isDark ? 1 : 0)};
  }
`;

const SunAndMoon = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  width: 100px;
  border-radius: 50%;
  background-color: #ffedd3;
  box-shadow: 0px 0px 100px 10px #ffedd3;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    background-color: #fff3e3;
  }
`;

const Chat = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Bubble = styled(motion.div)`
  width: 250px;
`;

const TextBox = styled.div`
  color: #000;
`;

const Text1 = styled(TEXT)`
  top: 80px;
  left: 80px;
`;

const Text2 = styled(TEXT)`
  top: 200px;
  left: 160px;
`;

const Cut1 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Base $isDark={isDark} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ToggleBtn isDark={isDark} setIsDark={setIsDark} />
      <SunAndMoon />
      {isDark && (
        <>
          <Chat>
            <Bubble
              width={324}
              height={386}
              animate={{ opacity: [0, 1], y: [10, 0] }}
            >
              <IMAGE width={324} height={386} src={BUBBLE2URL} alt="말풍선" />
              <TextBox>
                <Text1>늦은 밤</Text1>
                <Text2>모두가 잠에 들 시간</Text2>
              </TextBox>
            </Bubble>
          </Chat>
          <StepBtn startStep={true} color="#ffffff" />
        </>
      )}
    </Base>
  );
};

export default Cut1;
