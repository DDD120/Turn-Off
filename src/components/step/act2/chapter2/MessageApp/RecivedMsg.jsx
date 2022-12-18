import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.li`
  width: 70%;
`;

const Animation = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

const MsgBox = styled.div`
  flex: 4;
`;

const Bubble = styled(motion.span)`
  display: inline-block;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 8px;

  &::before {
    background-color: #fff;
    content: " ";
    position: absolute;
    width: 15px;
    height: 15px;
    z-index: 1;
    top: 10%;
    left: 0;
    transform: translateX(calc(100% - 20px)) rotate(45deg);
  }
`;

const ProfilePicture = styled.div`
  flex: 1;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  background-color: #ccc;

  img {
    width: 100%;
  }
`;

const Text = styled.p`
  word-break: keep-all;
  word-wrap: break-word;
`;

const Name = styled.p`
  margin-bottom: 4px;
`;

const Timestamp = styled.span`
  position: absolute;
  right: -60px;
  font-size: 0.4rem;
  color: #aaa;
`;

const container = {
  start: { opacity: 0, y: 10 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      staggerChildren: 1.5,
    },
  },
};

const item = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
};

const RecivedMsg = ({ isMotion = false, msgs, timestamp, setShowStepBtn }) => {
  const showStepBtn = () => {
    setShowStepBtn(true);
  };

  return (
    <Base>
      <Animation
        variants={isMotion ? container : undefined}
        initial="start"
        animate="end"
        onAnimationComplete={isMotion ? showStepBtn : undefined}
      >
        <ProfilePicture>
          <StaticImage
            width={359}
            height={358}
            src="../../../../../images/act2/chapter2/profile.webp"
            alt="엄마 프로필 사진"
            layout="constrained"
            placeholder="none"
          />
        </ProfilePicture>
        <MsgBox>
          <Name>엄마</Name>
          {msgs.map((msg, index) => {
            return (
              <Bubble variants={isMotion ? item : undefined} key={index}>
                <Text>{msg}</Text>
                {msgs.length === index + 1 && (
                  <Timestamp>{timestamp}</Timestamp>
                )}
              </Bubble>
            );
          })}
        </MsgBox>
      </Animation>
    </Base>
  );
};

export default RecivedMsg;
