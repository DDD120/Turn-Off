import React from "react";
import styled from "styled-components";
import { useProgress } from "store/progress";

const Base = styled.main`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Developer = styled.p`
  background-color: #88bfee;
  padding: 12px 20px;
  font-weight: bold;
`;

const Menu = styled.li`
  cursor: pointer;
  margin: 4px 0;
  &:hover {
    background-color: #bfe1ff;
  }
`;

const Main = () => {
  const { action } = useProgress();

  const startNew = () => {
    action.new();
    action.isReading();
  };
  const startLoad = () => {
    action.load();
    action.isReading();
  };

  return (
    <Base>
      <div>
        <Title>Turn Off</Title>
        <Developer>강원대학교 영상문화학과 201913536 이수민</Developer>
        <ul>
          <Menu onClick={startNew}>처음으로</Menu>
          <Menu onClick={startLoad}>이어보기</Menu>
        </ul>
      </div>
    </Base>
  );
};

export default Main;
