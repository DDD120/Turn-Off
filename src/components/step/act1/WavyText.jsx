import React, { memo } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const Letter = styled(motion.span)`
  display: inline-block;
  font-size: 2.4rem;
  color: #00122060;
`

const WavyText = ({ text, delay = 0, duration = 0.03, ...props }) => {
  const letters = Array.from(text)

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {letters.map((letter, index) => (
        <Letter
          style={{ display: "inline-block" }}
          key={index}
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </Letter>
      ))}
    </motion.p>
  )
}

export default memo(WavyText)
