import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import CheckListItem from "./CheckListItem";

const Base = styled.div`
  width: 100%;
  padding: 20px;
`;

const Information = styled.p`
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 0.9rem;
  color: #495057;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: #82c91e;
  }
`;

const Mode = styled.div`
  margin-bottom: 8px;
  p {
    margin-bottom: 4px;
  }
`;

const CheckList = styled.ul`
  list-style: square inside;
  color: #82c91e;
  margin-bottom: 10px;
  font-size: 0.9rem;

  li {
    margin: 2px 0;
  }
  label {
    color: #000;
    margin-left: 4px;
    cursor: pointer;
  }
`;

const ConfirmRadioBox = styled.fieldset`
  float: right;
  display: flex;
  font-size: 0.8rem;
  gap: 4px;
  margin: 4px 0;
  border: none;
  input {
    vertical-align: middle;
  }
`;

const Legend = styled.legend`
  float: left;
`;

const StartCureBox = styled.div`
  button {
    width: 100%;
    background-color: ${({ isAllProperCheck }) =>
      isAllProperCheck ? "#82c91e" : "#aaaaaa"};
    padding: 10px 20px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

const CHECK_LIST = {
  mode: {
    id: "mode",
    name: "모드",
    properCheck: false,
  },
  stress: {
    id: "stress",
    name: "스트레스",
    properCheck: false,
  },
  anxiety: {
    id: "anxiety",
    name: "불안감 완화",
    properCheck: false,
  },
  impatient: {
    id: "impatient",
    name: "초조함 완화",
    properCheck: false,
  },
  external_stimulus: {
    id: "external_stimulus",
    name: "외부 자극 영향 최소화",
    properCheck: false,
  },
  continual_care: {
    id: "continual_care",
    name: "지속적 보완 케어",
    properCheck: false,
  },
  enable_shutdown: {
    id: "enable_shutdown",
    name: "치료 후 종료 활성화",
    properCheck: false,
  },
  confirm: {
    id: "confirm",
    name: "항목 확인",
    properCheck: false,
  },
};

const CheckDetail = ({ setShowCure }) => {
  const [checkedInputs, setCheckedInputs] = useState(CHECK_LIST);
  const [isAllProperCheck, setIsAllProperCheck] = useState(false);

  const setProperCheckTrue = (id) => {
    setCheckedInputs((prev) => {
      return {
        ...prev,
        [prev[id].id]: {
          ...prev[id],
          properCheck: true,
        },
      };
    });
  };

  const setProperCheckFalse = (id) => {
    setCheckedInputs((prev) => {
      return {
        ...prev,
        [prev[id].id]: {
          ...prev[id],
          properCheck: false,
        },
      };
    });
  };

  const changeHandler = (checked, id) => {
    if (checkedInputs[id].id === "mode") {
      checked === "sleep" ? setProperCheckTrue(id) : setProperCheckFalse(id);
      return;
    }
    if (checkedInputs[id].id === "confirm") {
      checked === "yes" ? setProperCheckTrue(id) : setProperCheckFalse(id);
      return;
    }
    checked ? setProperCheckTrue(id) : setProperCheckFalse(id);
    return;
  };

  const checkAllProperCheck = useCallback(() => {
    let checkStateArray = [];
    for (let item of Object.values(checkedInputs)) {
      checkStateArray.push(item.properCheck);
    }
    return setIsAllProperCheck(!checkStateArray.includes(false));
  }, [checkedInputs]);

  const handleStartCureBtnClick = () => {
    isAllProperCheck && setShowCure(true);
  };

  useEffect(() => {
    checkAllProperCheck();
  }, [checkedInputs, checkAllProperCheck]);

  return (
    <Base>
      <Information>치료할 항목 및 옵션을 선택해주세요.</Information>
      <Mode>
        <p>상태 모드</p>
        <select onChange={(e) => changeHandler(e.target.value, "mode")}>
          <option value="normal">일반모드</option>
          <option value="sleep">수면모드</option>
        </select>
      </Mode>
      <CheckList>
        {Object.values(checkedInputs)
          .filter((item) => item.id !== "mode" && item.id !== "confirm")
          .map((item) => (
            <CheckListItem
              key={item.id}
              name={item.name}
              id={item.id}
              changeHandler={changeHandler}
            />
          ))}
      </CheckList>
      <ConfirmRadioBox
        onChange={(e) => changeHandler(e.target.value, "confirm")}
      >
        <Legend>위의 내용을 모두 확인했습니까?</Legend>
        <label>
          <input type="radio" name="confirm" value="yes" />예
        </label>
        <label>
          <input type="radio" name="confirm" value="no" />
          아니오
        </label>
      </ConfirmRadioBox>
      <StartCureBox isAllProperCheck={isAllProperCheck}>
        <button onClick={handleStartCureBtnClick}>치료 및 최적화 진행</button>
      </StartCureBox>
    </Base>
  );
};

export default CheckDetail;
