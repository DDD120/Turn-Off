import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { DefaultText } from "components/common/GlobalStyle"
import { StaticImage } from "gatsby-plugin-image"
import StepBtn from "components/common/StepBtn"

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Chat = styled(motion.div)`
  width: 50%;
  position: relative;
`

const Chapter5Cut7 = () => {
  return (
    <Base>
      <Chat
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      >
        <StaticImage
          width={329}
          height={159}
          loading="eager"
          src="../../../../images/bubble/bubble-1.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>음? 어라?</DefaultText>
      </Chat>
      <StepBtn />
    </Base>
  )
}

export default Chapter5Cut7
