import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "components/common/Menu"

const Base = styled.main`
  padding: 20px 0;
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  background-image: linear-gradient(#73b7c260 1.1px, transparent 1.1px),
    linear-gradient(to right, #73b7c260 1.1px, #ffffff 1.1px);
  background-size: 22px 22px;
`

const Title = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`

const Content = styled.div`
  flex: 1;
  align-self: stretch;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  padding: 10px;
`

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 10px #0000002b;
`

const ListText = styled.p`
  margin: 4px;
  word-break: keep-all;
  text-align: center;
`

const StepBtnImgWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
`

const ToastImgWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`
const CutImgWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`

const HowToPlay = () => {
  return (
    <Base>
      <Title>진행방식</Title>
      <Content>
        <List>
          <ListItem>
            <ListText>이 컨텐츠는 PC 사용을 권장합니다.</ListText>
          </ListItem>
          <ListItem>
            <ListText>
              하단의 화살표 버튼을 통해 다음 장 또는 이전 장으로 넘어갈 수
              있습니다.
            </ListText>
            <StepBtnImgWrapper>
              <StaticImage
                width={104}
                height={42}
                src={"../images/howtoplay-1.webp"}
                alt="화살표 버튼"
                loading="eager"
                layout="constrained"
                placeholder="none"
              />
            </StepBtnImgWrapper>
          </ListItem>
          <ListItem>
            <ListText>
              하단의 버튼이 없다면 상단의 주어진 미션을 수행하거나, <br />
              그림 또는 말풍선을 클릭해보세요.
            </ListText>
            <ToastImgWrapper>
              <StaticImage
                width={440}
                height={117}
                src={"../images/howtoplay-2.webp"}
                alt="미션 알림"
                loading="eager"
                layout="constrained"
                placeholder="none"
              />
            </ToastImgWrapper>
            <CutImgWrapper>
              <StaticImage
                width={500}
                height={419}
                src={"../images/howtoplay-3.webp"}
                alt="만화 컷"
                loading="eager"
                layout="constrained"
                placeholder="none"
              />
            </CutImgWrapper>
          </ListItem>
        </List>
        <Menu to="/">홈으로 가기</Menu>
      </Content>
    </Base>
  )
}

export default HowToPlay
