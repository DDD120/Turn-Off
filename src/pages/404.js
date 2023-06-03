import React from "react"
import styled from "styled-components"
import Menu from "components/common/Menu"

const Base = styled.section`
  text-align: center;
  align-self: stretch;
  flex: 1;
  background-color: #fff;
  background-image: linear-gradient(#73b7c260 1.1px, transparent 1.1px),
    linear-gradient(to right, #73b7c260 1.1px, #ffffff 1.1px);
  background-size: 22px 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
  }
`

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
`

const ErrorCode = styled.p`
  font-size: 4rem;
`

const ErrorPage = () => {
  return (
    <Base>
      <Content>
        <ErrorCode>404</ErrorCode>
        <p>없는 페이지입니다.</p>
        <Menu to="/">홈으로가기</Menu>
      </Content>
    </Base>
  )
}

export const Head = () => <title>Turn Off / 404</title>
export default ErrorPage
