import React from "react"
import styled from "styled-components"
import StepBtn from "components/common/StepBtn"
import { motion } from "framer-motion"
import { DefaultText } from "components/common/GlobalStyle"
import { StaticImage } from "gatsby-plugin-image"

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
`

const Chat = styled(motion.div)`
  width: 56%;
  position: relative;
`

const CutContainer = styled(motion.div)`
  width: 60%;
`

const Chapter1Cut7 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          width={346}
          height={224}
          loading="eager"
          src="../../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>앗 그러면 지금 컴퓨터 내가 사용할 수 있나?</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={293}
          height={325}
          loading="eager"
          src="../../../../images/act2/chapter1/chapter1_7-1.webp"
          alt="설레하는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>

      <StepBtn />
    </Base>
  )
}

export default Chapter1Cut7
