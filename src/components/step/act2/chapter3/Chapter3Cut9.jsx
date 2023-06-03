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

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  p {
    span {
      font-size: 0.8rem;
    }
  }
`

const CutContainer = styled(motion.div)`
  width: 90%;
`

const Chapter3Cut9 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={327}
          height={228}
          loading="eager"
          src="../../../../images/bubble/bubble-3.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>나중에 또 수정할 수 있겠지... 뭐</DefaultText>
      </Chat>
      <CutContainer initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <StaticImage
          width={500}
          height={318}
          loading="eager"
          src="../../../../images/act2/chapter3/chapter3_9-1.webp"
          alt="머리를 긁적이는 뒷모습의 뭉게"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Chapter3Cut9
