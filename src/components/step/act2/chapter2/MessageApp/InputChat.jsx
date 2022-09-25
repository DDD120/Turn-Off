import React, { useRef } from "react";
import styled from "styled-components";
import Filter from "badwords-ko";
import newBadWords from "./badwords";

const TextField = styled.div`
  flex: 1;
  background-color: #ffce63;
  display: flex;
`;

const Text = styled.textarea`
  font-family: "NanumGothicBold";
  font-size: 1.2rem;
  flex: 1;
  padding: 14px 20px;
  border: none;
  outline: none;
  resize: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SendBtn = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  font-family: "NanumGothicBold";
`;

const InputChat = ({ isActive, setMessages }) => {
  const msgRef = useRef(null);
  const filter = new Filter();
  filter.addWords(...newBadWords);

  const handleClickSendBtn = () => {
    const msg = msgRef.current.value;
    if (msg.trim() === "") return;
    const type = filter.isProfane(msg) ? "NOTICE" : "SENT";
    setMessages((prev) => [...prev, { type: type, content: msg }]);

    msgRef.current.value = "";
  };

  return (
    <TextField>
      <Text ref={msgRef} />
      <SendBtn onClick={isActive ? handleClickSendBtn : undefined}>
        전송
      </SendBtn>
    </TextField>
  );
};

export default InputChat;
