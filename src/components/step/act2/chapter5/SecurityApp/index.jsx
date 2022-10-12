import React, { useState } from "react";
import styled from "styled-components";
import { FcPlus } from "react-icons/fc";
import Main from "./Main";
import CheckDetail from "./CheckDetail";
import Cure from "./Cure";
import { useProgress } from "store/progress";

const Base = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #c9ccd5;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Header = styled.header`
  height: 30px;
  background-color: #82c91e;
  display: flex;
  align-items: center;
  svg {
    margin-left: 10px;
    font-size: 20px;
  }
`;

const Body = styled.main`
  display: flex;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SecurityApp = () => {
  const [showCheckDetail, setShowCheckDetail] = useState(false);
  const [showCure, setShowCure] = useState(false);
  const [completion, setCompletion] = useState(false);
  const { action } = useProgress();

  const handleClickCheckBtn = () => {
    completion ? action.increase() : setShowCheckDetail(true);
  };

  return (
    <Base>
      <Header>
        <FcPlus />
      </Header>
      <Body>
        {!showCheckDetail && !completion && (
          <Main clickEvent={handleClickCheckBtn} completion={completion} />
        )}
        {showCheckDetail && !showCure && !completion && (
          <CheckDetail setShowCure={setShowCure} />
        )}
        {showCure && !completion && <Cure setCompletion={setCompletion} />}
        {completion && (
          <Main clickEvent={handleClickCheckBtn} completion={completion} />
        )}
      </Body>
    </Base>
  );
};

export default SecurityApp;
