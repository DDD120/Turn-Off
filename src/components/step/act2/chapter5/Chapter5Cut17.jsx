import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import StepBtn from "components/common/StepBtn"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  background-color: ${({ isClose }) => (isClose ? "#000" : "#193e68")};
  transition: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseMsg = styled(motion.p)`
  color: #fff;
`

const Chapter5Cut17 = () => {
  const [isClose, setIsClose] = useState(false)

  const closeWindow = () => {
    setTimeout(() => {
      setIsClose(true)
    }, 5000)
  }

  return (
    <Base isClose={isClose}>
      {!isClose && (
        <CloseMsg
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: 20 }}
          onAnimationStart={closeWindow}
        >
          종료하는 중 . . .
        </CloseMsg>
      )}
      {isClose && <StepBtn color="#ffffff" />}
    </Base>
  )
}

export default Chapter5Cut17
