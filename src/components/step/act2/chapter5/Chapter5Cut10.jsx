import React from "react"
import styled from "styled-components"
import { DefaultText } from "components/common/GlobalStyle"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import StepBtn from "components/common/StepBtn"

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
  width: 50%;
  position: relative;
`

const CutContainer = styled.div`
  width: 70%;
`

const Chapter5Cut10 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          width={327}
          height={228}
          loading="eager"
          src="../../../../images/bubble/bubble-3.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>
          컴퓨터에도 휴지통이 있어?! 여긴 그래도 냄새는 안 나겠네
        </DefaultText>
      </Chat>
      <CutContainer>
        <StaticImage
          width={431}
          height={322}
          loading="eager"
          src="../../../../images/act2/chapter5/chapter5_10-1.webp"
          alt="쓰레기통 냄새를 맡는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Chapter5Cut10
