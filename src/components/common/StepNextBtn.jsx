import React from "react"
import styled from "styled-components"
import { IoMdArrowDroprightCircle } from "react-icons/io"
import { useControl } from "context/control"
import { navigate } from "gatsby"

const NextIcon = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s;
  color: ${({ color }) => `${color}60`};

  &:hover {
    color: ${({ color }) => color};
  }
`

const StepNextBtn = ({ color = "#001220" }) => {
  const { step } = useControl()

  return (
    <NextIcon color={color} onClick={() => navigate(`/play/${step + 1}`)}>
      <IoMdArrowDroprightCircle />
    </NextIcon>
  )
}

export default StepNextBtn
