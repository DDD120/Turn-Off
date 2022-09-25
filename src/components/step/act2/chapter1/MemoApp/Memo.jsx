import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { RiStickyNoteFill } from "react-icons/ri";

const Base = styled(motion.div)`
  position: absolute;
  top: ${({ top }) => top && `${top}px`};
  left: ${({ left }) => left && `${left}px`};
  right: ${({ right }) => right && `${right}px`};
  bottom: ${({ bottom }) => bottom && `${bottom}px`};
  width: ${({ w }) => `${w}px`};
  height: ${({ h }) => `${h}px`};
  border: 2px solid #000;
  background-color: #fff;
  z-index: 9;
  display: flex;
  flex-direction: column;
  cursor: ${({ $active }) => $active && "pointer"};
`;

const Head = styled.header`
  flex: 1;
  padding: 2px 6px;
  background-color: #4b79f9;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.9rem;
    font-weight: normal;
  }
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Body = styled.div`
  flex: 6;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow-y: scroll;

  & > p {
    word-wrap: break-word;
  }
`;

const item = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const Memo = ({
  top,
  left,
  right,
  bottom,
  w,
  h,
  dragRef,
  initial,
  setCloseCount,
  children,
}) => {
  const [showMemo, setShowMemo] = useState(true);
  const handleClickCloseMemo = () => {
    if (initial) return;
    setShowMemo(false);
    setCloseCount((prev) => prev + 1);
  };
  return (
    <>
      {showMemo && (
        <Base
          drag={!initial}
          dragConstraints={dragRef}
          w={w}
          h={h}
          top={top}
          left={left}
          right={right}
          bottom={bottom}
          variants={initial && item}
          $active={!initial}
        >
          <Head>
            <Title>
              <h1>
                <RiStickyNoteFill size="16" />
                제목 없음 - 메모장
              </h1>
            </Title>
            <Close onClick={handleClickCloseMemo}>
              <AiOutlineClose />
            </Close>
          </Head>
          <Body>
            <p>{children}</p>
          </Body>
        </Base>
      )}
    </>
  );
};

export default Memo;
