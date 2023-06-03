import React from "react"
import styled from "styled-components"
import { FcDocument, FcSms, FcEditImage, FcStart, FcPlus } from "react-icons/fc"
import StepBtn from "components/common/StepBtn"
import { motion } from "framer-motion"
import { IconWrapper, Active } from "components/common/WindowStyle"
import { StaticImage } from "gatsby-plugin-image"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;

  @media only screen and (max-width: 450px) {
    font-size: 12px;
  }
`

const Bubble = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  width: 100%;
`

const Chat = styled(motion.div)`
  width: 50%;
  position: relative;
  margin: 0 auto;

  & > p {
    text-align: center;
    word-break: keep-all;
  }

  & > p:nth-of-type(1) {
    width: 42%;
    position: absolute;
    top: 16%;
    left: 10%;
  }

  & > p:nth-of-type(2) {
    width: 40%;
    position: absolute;
    top: 55%;
    right: 16%;
  }
`

const Bottom = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`

const Chapter1Cut8 = () => {
  return (
    <Base>
      <Bubble>
        <Chat
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
        >
          <StaticImage
            width={324}
            height={386}
            loading="eager"
            src="../../../../images/bubble/bubble-2.webp"
            alt="말풍선"
            layout="constrained"
            placeholder="none"
          />
          <p>지금 켜져 있는 실행 프로그램은 5개.</p>
          <p>이 프로그램들을 작업 완료하면 되겠지?</p>
        </Chat>
      </Bubble>

      <Bottom>
        <li>
          <IconWrapper>
            <FcDocument />
          </IconWrapper>
          <Active />
        </li>
        <li>
          <IconWrapper>
            <FcSms />
          </IconWrapper>
          <Active />
        </li>
        <li>
          <IconWrapper>
            <FcEditImage />
          </IconWrapper>
          <Active />
        </li>
        <li>
          <IconWrapper>
            <FcStart />
          </IconWrapper>
          <Active />
        </li>
        <li>
          <IconWrapper>
            <FcPlus />
          </IconWrapper>
          <Active />
        </li>
      </Bottom>
      <StepBtn />
    </Base>
  )
}

export default Chapter1Cut8
