import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import RecivedMsg from "./RecivedMsg";
import SentMsg from "./SentMsg";

const Base = styled.ul`
  flex: 7;
  position: relative;
  overflow-y: scroll;
  padding: 20px 10px;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const WarningMsg = styled.p`
  text-align: center;
  margin: 8px 0;
  color: #666;
`;

const MsgList = ({ isMotion, messages, setShowStepBtn }) => {
  const scrollBottomRef = useRef(null);

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Base>
      <RecivedMsg
        isMotion={isMotion}
        setShowStepBtn={setShowStepBtn}
        msgs={[
          "사랑하는 딸~",
          "오늘 하루도 잘 지냈어?",
          "엄마가 항상 응원하는 거 알지? 건강 챙기구. 조심히 다녀 사랑해~♡",
        ]}
        timestamp="오전 1시 3분"
      />
      {messages?.map((msg, index) => {
        return (
          <div key={index}>
            {msg.type === "SENT" ? (
              <SentMsg>{msg.content}</SentMsg>
            ) : (
              <WarningMsg>부적절한 단어가 포함되어 있습니다.</WarningMsg>
            )}
          </div>
        );
      })}
      <li ref={scrollBottomRef} />
    </Base>
  );
};

export default MsgList;
