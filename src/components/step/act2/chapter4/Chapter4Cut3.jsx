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
  gap: 60px;
`

const Chat = styled(motion.div)`
  position: relative;
  width: 50%;

  @media only screen and (max-width: 420px) {
    font-size: 0.9rem;
  }
`

const CutContainer = styled.div`
  width: 90%;
`

const Chapter4Cut3 = () => {
  return (
    <Base>
      <Chat initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [-10, 0] }}>
        <StaticImage
          width={237}
          height={244}
          loading="eager"
          src="../../../../images/bubble/bubble-7.webp"
          alt="말풍선"
          layout="constrained"
          placeholder="none"
        />
        <DefaultText>아마도 누나가 아까 봤었던 영상 목록인가봐</DefaultText>
      </Chat>
      <CutContainer>
        <StaticImage
          width={500}
          height={169}
          loading="eager"
          src="../../../../images/act2/chapter4/chapter4_3-1.webp"
          alt="누워서 스마트폰으로 영상보는 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      <StepBtn />
    </Base>
  )
}

export default Chapter4Cut3
