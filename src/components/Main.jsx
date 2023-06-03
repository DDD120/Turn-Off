import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "components/common/Menu"
import { useControl } from "context/control"

const Base = styled.main`
  text-align: center;
  align-self: stretch;
  flex: 1;
  background-color: #ffffff;
  background-image: linear-gradient(#73b7c260 1.1px, transparent 1.1px),
    linear-gradient(to right, #73b7c260 1.1px, #ffffff 1.1px);
  background-size: 22px 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  width: 70%;
  margin: 20px auto;
`

const Information = styled.div`
  width: 80%;
  word-break: keep-all;
  margin: 40px auto;
`

const Main = () => {
  const { step } = useControl()

  return (
    <Base>
      <main>
        <Title>
          <StaticImage
            width={500}
            height={111}
            src="../images/logo.webp"
            alt="Turn Off"
            loading="eager"
            layout="constrained"
            placeholder="none"
          />
        </Title>
        <Information>
          <p>2022학년도 전기 강원대학교 영상문화학과 졸업작품</p>
          <p>201913536 이수민</p>
          <p>지도교수: 조은하</p>
        </Information>
        <ul>
          <li>
            <Menu to="/play/1">새로시작</Menu>
          </li>
          <li>
            <Menu to={`/play/${step}`}>이어보기</Menu>
          </li>
          <li>
            <Menu to="/howtoplay">진행 방식</Menu>
          </li>
        </ul>
      </main>
    </Base>
  )
}

export default Main
