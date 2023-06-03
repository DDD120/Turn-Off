import React, { useState } from "react"
import styled from "styled-components"
import { FcPlus } from "react-icons/fc"
import Main from "./Main"
import CheckDetail from "./CheckDetail"
import Cure from "./Cure"
import { useControl } from "context/control"
import { navigate } from "gatsby"

const Base = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #c9ccd5;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`

const Header = styled.header`
  height: 30px;
  background-color: #82c91e;
  display: flex;
  align-items: center;
  svg {
    margin-left: 10px;
    font-size: 20px;
  }
`

const Body = styled.main`
  display: flex;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const SecurityApp = ({ isActive }) => {
  const [securStep, setSecurStep] = useState(0)
  const { step } = useControl()

  const nextSecurStep = () => {
    setSecurStep((prev) => prev + 1)
  }

  const handleCheckBtnClick = () => {
    securStep === 3 ? navigate(`/play/${step + 1}`) : nextSecurStep()
  }

  const securStepComponents = [
    <Main onBtnClick={isActive ? handleCheckBtnClick : undefined} />,
    <CheckDetail next={nextSecurStep} />,
    <Cure next={nextSecurStep} />,
    <Main onBtnClick={handleCheckBtnClick} isCompletion />,
  ]

  return (
    <Base>
      <Header>
        <FcPlus />
      </Header>
      <Body>{securStepComponents[securStep]}</Body>
    </Base>
  )
}

export default SecurityApp
