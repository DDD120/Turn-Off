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
  width: 80%;
  word-break: keep-all;
  margin: 40px auto;
`;

const Main = () => {
  const [clickedHowToPlay, setClickedHowToPlay] = useState(false);
  const { action } = useProgress();

  const handleStartNewBtn = () => {
    action.new();
    action.isReading();
  };
  const handleStartLoadBtn = () => {
    action.load();
    action.isReading();
  };
  const handleShowHowToPlayBtn = () => {
    setClickedHowToPlay(true);
  };

  const handleGoHomeBtn = () => {
    setClickedHowToPlay(false);
  };

  return (
    <Base>
      <Home clickedHowToPlay={clickedHowToPlay}>
        <Title>
          <DefaultImage width={500} height={111} src={LOGOURL} alt="Turn Off" />
        </Title>
        <Information>
          <p>2022학년도 전기 강원대학교 영상문화학과 졸업작품</p>
          <p>201913536 이수민</p>
          <p>지도교수: 조은하</p>
        </Information>
        <ul>
          <li>
            <MenuBtn onClickMenuBtn={handleStartNewBtn}>새로시작</MenuBtn>
          </li>
          <li>
            <MenuBtn onClickMenuBtn={handleStartLoadBtn}>이어보기</MenuBtn>
          </li>
          <li>
            <MenuBtn onClickMenuBtn={handleShowHowToPlayBtn}>진행 방식</MenuBtn>
          </li>
        </ul>
      </Home>
      {clickedHowToPlay && <HowToPlay onClickGoHomeBtn={handleGoHomeBtn} />}
    </Base>
  );
};

export default Main;
