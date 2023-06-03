import React, { useState } from "react"
import styled from "styled-components"
import StepBtn from "components/common/StepBtn"
import MessageApp from "./MessageApp"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import useToast from "hooks/useToast"

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Chapter2Cut7 = () => {
  const [messages, setMessages] = useState([])
  useToast("엄마에게 답장을 해보자")

  return (
    <Base>
      <MessageApp
        messages={messages}
        setMessages={setMessages}
        isActive={true}
      />
      {messages.length > 0 && <StepBtn />}
      <ToastContainer />
    </Base>
  )
}

export default Chapter2Cut7
