import React from "react";
import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";

const Header = styled.header`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5f3dc4;
  svg {
    color: #fff;
    font-size: 1.4rem;
  }
`;

const ViewHistoryHeader = styled.div`
  padding: 10px 0;
  width: 90%;
  margin: 0 auto;
  h1 {
    font-size: 1.4rem;
    margin: 4px 0;
  }
  p {
    color: #868e96;
  }
`;

const VideoHeader = () => {
  return (
    <>
      <Header>
        <BsFillPlayFill />
      </Header>
      <ViewHistoryHeader>
        <h1>시청기록</h1>
        <p>오늘</p>
      </ViewHistoryHeader>
    </>
  );
};

export default VideoHeader;
