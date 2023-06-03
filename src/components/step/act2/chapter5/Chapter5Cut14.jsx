import React from "react"
import StepBtn from "components/common/StepBtn"
import styled from "styled-components"
import { DefaultText } from "components/common/GlobalStyle"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`

const Chat = styled(motion.div)`
  width: 80%;
  position: relative;
`

const CutContainer = styled(motion.div)`
  width: 50%;
`

const Chapter5Cut14 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <DefaultText>음 휴지통을 비웠더니 상쾌한 기분인걸?</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          loading="eager"
          src="../../../../images/act2/chapter5/chapter5_14-1.webp"
          alt="상쾌한 표정의 뭉게"
          layout="fullWidth"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Chapter5Cut14
