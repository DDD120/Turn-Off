import React from "react";
import styled from "styled-components";
import InputChat from "./InputChat";
import MsgList from "./MsgList";

const Base = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background-color: #acdcee;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #c9ccd5;
  border-radius: 4px;
  overflow: hidden;
`;

const TopHeader = styled.div`
  flex: 1;
  background-color: #9ccee0;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  margin-left: 20px;
`;

const MessageApp = ({ onMotion, isActive, messages, setMessages }) => {
  return (
    <Base>
      <TopHeader>
        <Name>엄마</Name>
      </TopHeader>
      <MsgList onMotion={onMotion} messages={messages} />
      <InputChat isActive={isActive} setMessages={setMessages} />
    </Base>
  );
};

export default MessageApp;
