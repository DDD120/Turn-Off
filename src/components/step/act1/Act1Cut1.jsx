import React, { useState } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

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

const Text1 = styled(DefaultText)`
  top: 80px;
  left: 80px;
`;

const Text2 = styled(DefaultText)`
  top: 200px;
  left: 160px;
`;

const Act1Cut1 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Base $isDark={isDark} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ToggleBtn isDark={isDark} setIsDark={setIsDark} />
      <SunAndMoon />
      {isDark && (
        <>
          <Chat>
            <Bubble animate={{ opacity: [0, 1], y: [10, 0] }}>
              <StaticImage
                width={324}
                height={386}
                src="../../../images/bubble/bubble-2.webp"
                loading="eager"
                alt="말풍선"
                layout="constrained"
                placeholder="none"
              />
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

export default Act1Cut1;
