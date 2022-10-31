import React, { useState } from "react";
import styled from "styled-components";
import LOGOURL from "images/logo.webp";
import HowToPlay from "./HowToPlay";
import { useProgress } from "store/progress";
import { DefaultImage } from "components/common/GlobalStyle";
import MenuBtn from "components/common/MenuBtn";

const Base = styled.section`
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
`;

const Home = styled.main`
  display: ${({ clickedHowToPlay }) => (clickedHowToPlay ? "none" : "block")};
`;

const Title = styled.h1`
  width: 70%;
  margin: 20px auto;
`;

const Information = styled.div`
  width: 60%;
  word-break: keep-all;
  margin: 0 auto 20px;
`;

const Main = () => {
  const [clickedHowToPlay, setClickedHowToPlay] = useState(false);
  const { action } = useProgress();

  const startNew = () => {
    action.new();
    action.isReading();
  };
  const startLoad = () => {
    action.load();
    action.isReading();
  };
  const showHowToPlay = () => {
    setClickedHowToPlay(true);
  };

  const goHome = () => {
    setClickedHowToPlay(false);
  };

  return (
    <Base>
      <Home clickedHowToPlay={clickedHowToPlay}>
        <Title>
          <DefaultImage width={500} height={111} src={LOGOURL} alt="Turn Off" />
        </Title>
        <Information>
          <p>강원대학교 영상문화학과 201913536 이수민 졸업작품</p>
        </Information>
        <ul>
          <li>
            <MenuBtn handleClickEvent={startNew}>새로시작</MenuBtn>
          </li>
          <li>
            <MenuBtn handleClickEvent={startLoad}>이어보기</MenuBtn>
          </li>
          <li>
            <MenuBtn handleClickEvent={showHowToPlay}>진행 방식</MenuBtn>
          </li>
        </ul>
      </Home>
      {clickedHowToPlay && <HowToPlay goHome={goHome} />}
    </Base>
  );
};

export default Main;
