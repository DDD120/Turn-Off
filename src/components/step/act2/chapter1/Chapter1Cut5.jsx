import React, { useState } from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import Window from "components/common/Window";
import Loading from "components/common/Loading";
import MsgWindow from "components/step/act2/chapter1/MsgWindow";
import { motion } from "framer-motion";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";
import {
  FcHome,
  FcDocument,
  FcSms,
  FcEditImage,
  FcStart,
  FcPlus,
} from "react-icons/fc";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
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

const Chat = styled(motion.div)`
  width: 40%;
  position: absolute;
  top: 20%;

  @media only screen and (max-width: 768px) {
    width: 60%;
  }
`;

const MsgWindowWrapper = styled.div`
  width: 60%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;

const WindowWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chapter1Cut5 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleClickBtn = () => {
    setIsClicked(true);
    loading();
  };

  return (
    <Base>
      {!isClicked ? (
        <>
          <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
            <StaticImage
              width={452}
              height={140}
              src="../../../../images/bubble/bubble-6.webp"
              alt="말풍선"
              layout="constrained"
              placeholder="none"
            />
            <DefaultText>뭐 일단 확인을 눌러볼까?</DefaultText>
          </Chat>

          <MsgWindowWrapper>
            <MsgWindow onClick={handleClickBtn} active="true" />
          </MsgWindowWrapper>
        </>
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <WindowWrapper
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: [0, 0.5, 1], scaleY: [0, 1.1, 1] }}
              >
                <Window>
                  <Bottom>
                    <ul>
                      <li>
                        <IconWrapper>
                          <FcHome />
                        </IconWrapper>
                      </li>

                      <li>
                        <IconWrapper hover>
                          <FcDocument />
                        </IconWrapper>
                        <Active />
                      </li>

                      <li>
                        <IconWrapper hover>
                          <FcSms />
                        </IconWrapper>
                        <Active />
                      </li>
                      <li>
                        <IconWrapper hover>
                          <FcEditImage />
                        </IconWrapper>
                        <Active />
                      </li>
                      <li>
                        <IconWrapper hover>
                          <FcStart />
                        </IconWrapper>
                        <Active />
                      </li>
                      <li>
                        <IconWrapper hover>
                          <FcPlus />
                        </IconWrapper>
                        <Active />
                      </li>
                    </ul>
                  </Bottom>
                </Window>
              </WindowWrapper>
              <StepBtn />
            </>
          )}
        </>
      )}
    </Base>
  );
};

export default Chapter1Cut5;
