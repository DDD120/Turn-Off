import Bubble2URL from "images/bubble/bubble-2.webp";
import React, { useState } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";

const Base = styled(motion.div)`
  padding: 0 10px;
  overflow: hidden;
  align-self: stretch;
  position: relative;
  flex: 1;
  background-color: #b8d3f1;
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

  & > img {
    width: 100%;
  }
`;

const Text = styled.div`
  color: #000;
  text-align: center;
  word-break: keep-all;

  & > p:nth-of-type(1) {
    position: absolute;
    top: 80px;
    left: 80px;
    transform: translate(-50%, -50%);
  }
  & > p:nth-of-type(2) {
    position: absolute;
    top: 200px;
    left: 160px;
    transform: translate(-50%, -50%);
  }
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
            <Bubble animate={{ opacity: [0, 1], y: [10, 0] }}>
              <img src={Bubble2URL} alt="말풍선" />
              <Text>
                <p>늦은 밤.</p>
                <p>누군가에겐 한창 깨어있을 시간.</p>
              </Text>
            </Bubble>
          </Chat>
          <StepBtn startStep={true} color="#ffffff" />
        </>
      )}
    </Base>
  );
};

export default Cut1;
