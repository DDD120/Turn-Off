import React from "react";
import styled from "styled-components";
import { DefaultImage } from "components/common/GlobalStyle";
import IMG1URL from "images/howtoplay-1.webp";
import IMG2URL from "images/howtoplay-2.webp";
import IMG3URL from "images/howtoplay-3.webp";
import MenuBtn from "components/common/MenuBtn";

const Base = styled.div`
  padding: 20px 0;
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Content = styled.div`
  flex: 1;
  align-self: stretch;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  padding: 10px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 10px #0000002b;
`;

const ListText = styled.p`
  margin: 4px;
  word-break: keep-all;
  text-align: center;
`;

const StepBtnImgWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
`;

const ToastImgWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const CutImgWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const HowToPlay = ({ goHome }) => {
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
              <DefaultImage
                width={104}
                height={42}
                src={IMG1URL}
                alt="화살표 버튼"
              />
            </StepBtnImgWrapper>
          </ListItem>
          <ListItem>
            <ListText>
              하단의 버튼이 없다면 상단의 주어진 미션을 수행하거나, <br />
              그림 또는 말풍선을 클릭해보세요.
            </ListText>
            <ToastImgWrapper>
              <DefaultImage
                width={440}
                height={117}
                src={IMG2URL}
                alt="미션 알림"
              />
            </ToastImgWrapper>
            <CutImgWrapper>
              <DefaultImage
                width={500}
                height={419}
                src={IMG3URL}
                alt="만화 컷"
              />
            </CutImgWrapper>
          </ListItem>
        </List>
      </Content>
      <MenuBtn handleClickEvent={goHome}>홈으로 가기</MenuBtn>
    </Base>
  );
};

export default HowToPlay;
