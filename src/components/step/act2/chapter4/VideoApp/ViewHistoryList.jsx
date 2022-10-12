import React from "react";
import styled, { css } from "styled-components";
import { AiFillSetting } from "react-icons/ai";

import Loading from "components/common/Loading";

const Base = styled.ul`
  background-color: #fff;
  aspect-ratio: 3/4;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const ViewHistoryItem = styled.li`
  width: 90%;
  color: #000;
  margin: 10px 0;
`;

const ImgContainer = styled.div`
  position: relative;

  img {
    aspect-ratio: 4/3;
    width: 100%;
  }
`;

const RunningTime = styled.span`
  display: inline-block;
  padding: 2px 4px;
  background-color: #000;
  color: #fff;
  position: absolute;
  right: 12px;
  bottom: 12px;
  font-size: 0.8rem;
`;

const PlayBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 4px;
  width: ${({ currentTime }) => currentTime};
  height: 4px;
  background-color: #c2255c;
  z-index: 99;
`;

const Setting = styled.button`
  font-size: 1.2rem;
  width: 90%;
  padding: 20px 0;
  color: #fff;
  background-color: #5f3dc4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 20px;
  transition: 0.3s;
  gap: 4px;
  cursor: pointer;

  ${({ videos }) =>
    videos.length === 0 &&
    css`
      position: absolute;
      bottom: 0;
    `}

  &:hover {
    filter: brightness(0.9);
  }
`;

const NoViewHistoryMsg = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #777;
  word-break: keep-all;
  text-align: center;
`;

const ViewHistoryList = ({ videos, isLoading, handleClickSettingBtn }) => {
  return (
    <Base>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {videos.length === 0 && (
            <NoViewHistoryMsg>시청기록이 없습니다.</NoViewHistoryMsg>
          )}
          {videos.map((video, index) => (
            <ViewHistoryItem key={index}>
              <ImgContainer>
                <img src={video.thumbnail} alt={video.title} />
                <RunningTime>{video.running_time}</RunningTime>
                <PlayBar currentTime={video.current_time} />
              </ImgContainer>
              <p>{video.title}</p>
            </ViewHistoryItem>
          ))}
          <Setting videos={videos} onClick={handleClickSettingBtn}>
            <span>설정</span>
            <AiFillSetting />
          </Setting>
        </>
      )}
    </Base>
  );
};

export default ViewHistoryList;
