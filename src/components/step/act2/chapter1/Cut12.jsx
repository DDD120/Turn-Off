import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import MsgWindow from "./MsgWindow";
import IMG1URL from "images/act2/chapter1/cut12-1.webp";
import SOUND1 from "sounds/cut12.wav";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: #ffffff;
  background-image: linear-gradient(#73b7c260 1.1px, transparent 1.1px),
    linear-gradient(to right, #73b7c260 1.1px, #ffffff 1.1px);
  background-size: 22px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Effect = styled(motion.div)`
  position: absolute;
  top: 30px;
  & > img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
  }
`;

const MsgWindowWrapper = styled(motion.div)`
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Cut12 = () => {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.play();
  }, []);
  return (
    <Base>
      <Effect
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 0], x: [-10, 10], y: [-10, 10] }}
      >
        <img src={IMG1URL} alt="띠링-" />
      </Effect>
      {/* <audio ref={audioRef} src={SOUND1} type="audio/wav" /> */}
      <audio ref={audioRef}>
        <source src={SOUND1} type="audio/wav" />
        <track src="" kind="captions" label="" />
      </audio>
      <MsgWindowWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <MsgWindow />
      </MsgWindowWrapper>

      <StepBtn />
    </Base>
  );
};

export default Cut12;
