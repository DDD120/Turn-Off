import React from "react"
import StepBtn from "components/common/StepBtn"
import styled from "styled-components"
import { motion } from "framer-motion"
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
  position: relative;
`

const CutContainer = styled.div`
  width: 60%;
  text-align: center;
`

const Chat = styled(motion.p)`
  display: inline-block;
  margin-bottom: 40px;
  font-size: 1.4rem;
`

const Chapter5Cut5 = () => {
  return (
    <Base>
      <CutContainer>
        <Chat
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [-10, 0] }}
        >
          됐다!
        </Chat>
        <StaticImage
          width={416}
          height={484}
          loading="eager"
          src="../../../../images/act2/chapter5/chapter5_5-1.webp"
          alt="밝은 표정의 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Chapter5Cut5
