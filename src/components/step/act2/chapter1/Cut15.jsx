import React, { useState } from "react";
import styled, { css } from "styled-components";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";
import BUBBLE6URL from "images/bubble/bubble-6.webp";
import IMG1URL from "images/act2/chapter1/cut15-1.webp";
import IMG2URL from "images/act2/chapter1/cut15-2.webp";
import { DefaultImage, DefaultText } from "components/common/GlobalStyle";

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
  flex-direction: column;
  gap: 14px;
  position: relative;
`;

const Chat = styled(motion.div)`
  width: 60%;
  position: relative;
  cursor: pointer;

  ${({ isClicked }) =>
    !isClicked &&
    css`
      pointer-events: auto;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 20px 4px #73b8c2a2;
      }
    `}
`;

const CutContainer = styled(motion.div)`
  position: relative;
  width: 40%;
`;

const Chat2 = styled.div`
  text-align: center;
  word-break: keep-all;
  margin-bottom: 20px;
`;

const CutContainer2 = styled(motion.div)`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px #00000036;
`;

const Think = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Cut15 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickChat = () => {
    setIsClicked(true);
  };
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
        onClick={handleClickChat}
        isClicked={isClicked}
      >
        <DefaultImage width={452} height={140} src={BUBBLE6URL} alt="말풍선" />
        <DefaultText>음... 이건 우리 누나 컴퓨터 배경이잖아?!</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultImage
          width={362}
          height={581}
          src={IMG1URL}
          alt="생각난 뭉게"
        />
      </CutContainer>
      {isClicked && (
        <>
          <Think>
            <CutContainer2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1], scale: [0, 1] }}
            >
              <Chat2>
                <p>밤 늦게까지 그 앞에 앉아있던 모습이 생각나</p>
              </Chat2>
              <DefaultImage
                width={377}
                height={253}
                src={IMG2URL}
                alt="밤늦게까지 깨어있는 승현"
              />
            </CutContainer2>
          </Think>
          <StepBtn />
        </>
      )}
    </Base>
  );
};

export default Cut15;
