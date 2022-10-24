import React from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #e8f2fa;
  border: 2px solid #000000;
  border-radius: 8px;
  box-shadow: 0px 0px 40px #4e7ba864;
  text-align: center;
  padding: 12px;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 1rem;
  flex: 1;

  & > span {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: red;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const Prompt = styled.div`
  background-color: #fff;
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  padding: 10px;

  & > div {
    width: 70%;
  }
`;

const ButtonBox = styled.div`
  flex: 1.8;
  background-color: #ccd5e4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
`;

const Button = styled.button`
  font-weight: bold;
  padding: 8px 12px;
  background-color: #dfe3ee;
  cursor: ${({ active }) => active && "pointer"};
  transition: 0.3s;

  &:hover {
    background-color: ${({ active }) => active && "#a9b7dc"};
  }
`;

const MsgWindow = ({ active = false, onClick = null }) => {
  return (
    <Base>
      <Title>
        <span />
        Seunghyeon System Error
      </Title>
      <Prompt>
        <div>
          <p>진행 중인 작업을 모두 완료 후, 종료를 시도하길 바랍니다.</p>
          <br />
          <p>[에러 시도 횟수: 236]</p>
        </div>
      </Prompt>
      <ButtonBox>
        <Button onClick={onClick} active={active}>
          확인
        </Button>
      </ButtonBox>
    </Base>
  );
};

export default MsgWindow;
