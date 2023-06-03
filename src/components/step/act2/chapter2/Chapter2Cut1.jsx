import React from "react"
import styled from "styled-components"
import StepBtn from "components/common/StepBtn"
import { motion } from "framer-motion"
import { DefaultText } from "components/common/GlobalStyle"
import { StaticImage } from "gatsby-plugin-image"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

const CutContainer = styled(motion.div)`
  width: 60%;
`

const Chat = styled(motion.div)`
  width: 60%;
  position: relative;
  cursor: pointer;
`

const Chapter2Cut1 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
        <StaticImage
          width={452}
          height={140}
          loading="eager"
          src="../../../../images/bubble/bubble-6.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>
          하나 완료! <br /> 그 다음엔...
        </DefaultText>
      </Chat>
      <CutContainer
        initial={{ opcity: 0 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      >
        <StaticImage
          width={390}
          height={482}
          loading="eager"
          src="../../../../images/act2/chapter2/chapter2_1-1.webp"
          alt="다음 앱을 누르려는 손"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Chapter2Cut1
