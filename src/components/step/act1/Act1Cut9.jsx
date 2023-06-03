import React from "react"
import StepBtn from "components/common/StepBtn"
import styled from "styled-components"
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

const Chat = styled(motion.div)`
  width: 60%;
  position: relative;
`

const CutContainer = styled.div`
  width: 60%;
`

const Act1Cut9 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          width={329}
          height={159}
          loading="eager"
          src="../../../images/bubble/bubble-1.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>끼잉...</DefaultText>
      </Chat>
      <CutContainer>
        <StaticImage
          width={328}
          height={385}
          loading="eager"
          src="../../../images/act1/act1_9-1.webp"
          alt="승현에게 위로하는 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Act1Cut9
