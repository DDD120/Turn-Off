import React, { useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import VideoHeader from "./VideoHeader";
import ViewHistoryList from "./ViewHistoryList";
import SettingModal from "./SettingModal";

const Base = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #c9ccd5;
  border-radius: 4px;
  position: relative;
`;

const Footer = styled.footer`
  height: 20px;
`;

const VideoApp = ({ isActiveApp, closeVideoApp }) => {
  const modalRef = useRef(null);
  const [isActiveViewHistory, setIsActiveViewHistory] = useState(false);
  const [isActiveAlgorithm, setIsActiveAlgorithm] = useState(false);

  const handleClickSettingBtn = () => {
    if (isActiveApp) {
      modalRef.current.showModal();
    }
    return;
  };

  const toggleSwitchViewHistory = () => {
    setIsActiveViewHistory(!isActiveViewHistory);
  };
  const toggleSwitchAlgorithm = () => {
    setIsActiveAlgorithm(!isActiveAlgorithm);
  };
  const handleClickApplyBtn = () => {
    if (isActiveViewHistory && isActiveAlgorithm) {
      closeVideoApp();
    }
    return;
  };
  return (
    <Base>
      <VideoHeader />
      <ViewHistoryList handleClickSettingBtn={handleClickSettingBtn} />
      <SettingModal
        modalRef={modalRef}
        toggleSwitchViewHistory={toggleSwitchViewHistory}
        toggleSwitchAlgorithm={toggleSwitchAlgorithm}
        handleClickApplyBtn={handleClickApplyBtn}
      />
      <Footer />
    </Base>
  );
};

export default VideoApp;
