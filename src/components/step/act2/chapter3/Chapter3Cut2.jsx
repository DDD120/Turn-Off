import React from "react"
import styled from "styled-components"
import StepBtn from "components/common/StepBtn"
import { motion } from "framer-motion"
import { DefaultText } from "components/common/GlobalStyle"
import { StaticImage } from "gatsby-plugin-image"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

const CutContainer = styled(motion.div)`
  width: 90%;
`

const Chat = styled(motion.div)`
  position: relative;
  width: 60%;
`

const Chapter3Cut2 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          width={452}
          height={140}
          loading="eager"
          src="../../../../images/bubble/bubble-6.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>어라 저 화면도...</DefaultText>
      </Chat>
      <CutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <StaticImage
          width={500}
          height={251}
          loading="eager"
          src="../../../../images/act2/chapter3/chapter3_2-1.webp"
          alt="무언가 깨달은 표정인 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Chapter3Cut2
