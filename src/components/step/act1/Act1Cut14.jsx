import React, { useState } from "react"
import styled, { css } from "styled-components"
import StepBtn from "components/common/StepBtn"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
`

const CutContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;

  ${({ $isClicked }) =>
    !$isClicked &&
    css`
      pointer-events: auto;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 20px 4px #73b8c2a2;
      }
    `}

  p {
    position: absolute;
    top: 50%;
    right: 50px;
  }
`

const Act1_14 = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <Base>
      <CutContainer
        onClick={() => setIsClicked(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        $isClicked={isClicked}
      >
        <StaticImage
          width={500}
          height={242}
          loading="eager"
          src="../../../images/act1/act1_14-1.webp"
          alt="한숨 쉬는 승현"
          layout="constrained"
          placeholder="none"
        />
        <p>하...</p>
      </CutContainer>
      {isClicked && (
        <>
          <CutContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            $isClicked={isClicked}
          >
            <StaticImage
              width={500}
              height={242}
              loading="eager"
              src="../../../images/act1/act1_14-2.webp"
              alt="밑을 쳐다보는 승현"
              layout="constrained"
              placeholder="none"
            />
            <p>(힐끔)</p>
          </CutContainer>
          <StepBtn />
        </>
      )}
    </Base>
  )
}

export default Act1_14
