import React, { useState } from "react";
import StepBtn from "components/common/StepBtn";
import styled from "styled-components";
import FilterContainer from "./RetouchApp/FilterContainer";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  background-color: #18152e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CutContainer = styled.div`
  width: 80%;

  margin: 0 auto;
`;

const Chat = styled.div`
  position: absolute;
  color: #fff;
  word-break: keep-all;
  text-align: center;
`;

const Chat1 = styled(Chat)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200px);
`;

const Chat2 = styled(Chat)`
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 200px);
`;

const INITAL_FILTER_VALUE = {
  brightness: 100,
  contrast: 100,
  saturate: 100,
  grayscale: 0,
  invert: 0,
  huerotate: 0,
  blur: 0,
  sepia: 0,
};

const Cut34 = () => {
  const [filters, setFilters] = useState(INITAL_FILTER_VALUE);

  return (
    <Base>
      <CutContainer>
        <FilterContainer filters={filters} setFilters={setFilters} />
      </CutContainer>
      <Chat1>
        <p>... 근데 이걸 내가 할 수 있을까?</p>
      </Chat1>
      <Chat2>
        <p>무슨 말인지도 모르겠고 복잡해보여...</p>
      </Chat2>
      <StepBtn color="#ffffff" />
    </Base>
  );
};

export default Cut34;
