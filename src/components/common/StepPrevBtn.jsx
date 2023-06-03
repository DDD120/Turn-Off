import React from "react"
import styled from "styled-components"
import { IoMdArrowDropleftCircle } from "react-icons/io"
import { useControl } from "context/control"
import { navigate } from "gatsby"

const PrevIcon = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s;
  color: ${({ color }) => `${color}60`};

  &:hover {
    color: ${({ color }) => color};
  }
`

const StepPrevBtn = ({ color = "#001220" }) => {
  const { step } = useControl()

  return (
    <PrevIcon color={color} onClick={() => navigate(`/play/${step - 1}`)}>
      <IoMdArrowDropleftCircle />
    </PrevIcon>
  )
}

export default StepPrevBtn
