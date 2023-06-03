import React from "react"
import styled from "styled-components"

const Base = styled.li`
  max-width: 70%;
  margin: 15px;
  margin-left: auto;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  white-space: pre;
`

const Bubble = styled.span`
  display: inline-block;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 8px;

  &::before {
    background-color: #fff;
    content: " ";
    position: absolute;
    width: 15px;
    height: 15px;
    z-index: 1;
    top: 10%;
    right: 0;
    transform: translateX(calc(100% - 10px)) rotate(45deg);
  }
`

const Text = styled.p`
  word-break: keep-all;
  word-wrap: break-word;
`

const SentMsg = ({ children }) => {
  return (
    <Base>
      <Bubble>
        <Text>{children}</Text>
      </Bubble>
    </Base>
  )
}

export default SentMsg
