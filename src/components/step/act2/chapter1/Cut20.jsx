import React, { useRef, useState } from "react";
import styled from "styled-components";
import StepBtn from "components/common/StepBtn";
import MemoLayout from "./MemoApp/MemoLayout";
import {
  FcDocument,
  FcStart,
  FcSms,
  FcEditImage,
  FcPlus,
  FcHome,
} from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useToast from "hooks/useToast";
import Window from "components/common/Window";
import { Bottom, IconWrapper, Active } from "components/common/WindowStyle";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cut20 = () => {
  const dragRef = useRef();
  const [hasChildElement, setHasChildElement] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("메모장을 다 닫아버리자!");

  return (
    <Base ref={dragRef}>
      <Window>
        <Bottom>
          <ul>
            <li>
              <IconWrapper>
                <FcHome />
              </IconWrapper>
            </li>
            {hasChildElement && (
              <li>
                <IconWrapper hover={true}>
                  <FcDocument />
                </IconWrapper>
                <Active />
              </li>
            )}
            <li>
              <IconWrapper hover={true}>
                <FcSms />
              </IconWrapper>
              <Active />
            </li>
            <li>
              <IconWrapper hover={true}>
                <FcEditImage />
              </IconWrapper>
              <Active />
            </li>
            <li>
              <IconWrapper hover={true}>
                <FcStart />
              </IconWrapper>
              <Active />
            </li>
            <li>
              <IconWrapper hover={true}>
                <FcPlus />
              </IconWrapper>
              <Active />
            </li>
          </ul>
        </Bottom>
      </Window>
      <ToastContainer />
      <MemoLayout
        setHasChildElement={setHasChildElement}
        interactive={false}
        dragRef={dragRef}
      />
      {!hasChildElement && <StepBtn />}
    </Base>
  );
};

export default Cut20;
