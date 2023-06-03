import React from "react"
import StepBtn from "components/common/StepBtn"
import styled from "styled-components"
import { motion } from "framer-motion"
import { DefaultText } from "components/common/GlobalStyle"
import { StaticImage } from "gatsby-plugin-image"

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

const Chat = styled(motion.div)`
  width: 60%;
  position: relative;
`

const CutContainer = styled(motion.div)`
  width: 90%;
`

const Chapter5Cut8 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={346}
          height={224}
          loading="eager"
          src="../../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>뭐가 하나가 더 있는데? 다 종료한 게 아니였나</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={481}
          height={239}
          loading="eager"
          src="../../../../images/act2/chapter5/chapter5_8-1.webp"
          alt="의아한 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Chapter5Cut8
