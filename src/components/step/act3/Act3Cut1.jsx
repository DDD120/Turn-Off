import React, { useState } from "react"
import styled, { css } from "styled-components"
import StepBtn from "components/common/StepBtn"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CutContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;

  ${({ $isclicked }) =>
    !$isclicked &&
    css`
      pointer-events: auto;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 20px 4px #73b8c2a2;
      }
    `}
`

const Act3Cut1 = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <Base>
      <CutContainer
        onClick={() => setIsClicked(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        $isclicked={isClicked}
      >
        <StaticImage
          width={500}
          height={412}
          loading="eager"
          src="../../../images/act3/act3_1-1.webp"
          alt="눈을 뜬 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>
      {isClicked && (
        <>
          <CutContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            $isclicked={isClicked}
          >
            <StaticImage
              width={500}
              height={412}
              loading="eager"
              src="../../../images/act3/act3_1-2.webp"
              alt="침대에 눈 감고 있는 승현"
              layout="constrained"
              placeholder="none"
            />
          </CutContainer>
          <StepBtn />
        </>
      )}
    </Base>
  )
}

export default Act3Cut1
