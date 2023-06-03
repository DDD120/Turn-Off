import React from "react"
import styled from "styled-components"
import { AiFillSecurityScan, AiFillCloseCircle } from "react-icons/ai"
import IMG1URL from "images/act2/chapter5/bad_state.webp"
import IMG2URL from "images/act2/chapter5/good_state.webp"
import { DefaultImage } from "components/common/GlobalStyle"

const State = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`

const StateImg = styled.div`
  width: 60%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: ${({ isGood }) =>
    isGood ? "4px solid #74b816" : "4px solid #d6336c"};
  overflow: hidden;

  img {
    border-radius: 50%;
  }
`

const StateText = styled.div`
  text-align: center;
  word-break: keep-all;
  p:nth-of-type(2) {
    color: #adb5bd;
    font-size: 0.8rem;
    margin-top: 4px;
  }
`

const Check = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CheckBtn = styled.button`
  width: 80%;
  aspect-ratio: 1/1;
  background-color: #94d82d;
  border-radius: 12px;
  box-shadow: 0px 0px 10px #adb5bd;
  word-break: keep-all;
  cursor: pointer;

  p {
    font-size: 1.05rem;
    margin-bottom: 8px;
  }
`

const state = {
  bad: {
    img: {
      url: IMG1URL,
      alt: "나쁜 상태",
    },
    state_text: "현재 상태가 불안정합니다.",
    btn: {
      text: "치료 및 최적화",
      icon: <AiFillSecurityScan size={50} style={{ color: "#5c940d" }} />,
    },
  },
  good: {
    img: {
      url: IMG2URL,
      alt: "좋은 상태",
    },
    state_text: "현재 상태가 안전합니다.",
    btn: {
      text: "닫기",
      icon: <AiFillCloseCircle size={50} style={{ color: "#5c940d" }} />,
    },
  },
}

const Main = ({ isCompletion, onBtnClick }) => {
  const handleCheckBtnClick = () => {
    if (onBtnClick) onBtnClick()
  }

  return (
    <>
      <State>
        <StateImg isGood={isCompletion}>
          <DefaultImage
            width={376}
            height={376}
            src={isCompletion ? state.good.img.url : state.bad.img.url}
            alt={isCompletion ? state.good.img.alt : state.good.img.alt}
          />
        </StateImg>
        <StateText>
          <p>{isCompletion ? state.good.state_text : state.bad.state_text}</p>
          {!isCompletion && <p>최적화를 진행해보세요.</p>}
        </StateText>
      </State>

      <Check>
        <CheckBtn onClick={handleCheckBtnClick}>
          <p>{isCompletion ? state.good.btn.text : state.bad.btn.text}</p>
          <div>{isCompletion ? state.good.btn.icon : state.bad.btn.icon}</div>
        </CheckBtn>
      </Check>
    </>
  )
}

export default Main
