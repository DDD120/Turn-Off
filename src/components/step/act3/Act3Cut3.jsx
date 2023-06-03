import React from "react"
import StepBtn from "components/common/StepBtn"
import styled from "styled-components"
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
`

const CutContainer = styled.div`
  width: 90%;
`

const Chat = styled(motion.div)`
  width: 50%;
  z-index: 1;
`

const Chat1 = styled(Chat)`
  margin-left: auto;
  transform: translateY(20px);
`
const Chat2 = styled(Chat)`
  margin-right: auto;
  transform: translateY(-20px);
`

const Act3Cut3 = () => {
  return (
    <Base>
      <Chat1 initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={346}
          height={224}
          loading="eager"
          src="../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>언제 잠든 거지?</DefaultText>
      </Chat1>

      <CutContainer>
        <StaticImage
          width={500}
          height={309}
          loading="eager"
          src="../../../images/act3/act3_3-1.webp"
          alt="의아한 표정의 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <Chat2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.2 }}
      >
        <StaticImage
          width={346}
          height={224}
          loading="eager"
          src="../../../images/bubble/bubble-4.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>그래도 꽤 일찍 잠든 것 같은데</DefaultText>
      </Chat2>
      <StepBtn />
    </Base>
  )
}

export default Act3Cut3
