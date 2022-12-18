import React, { useState } from "react";
import Window from "components/common/Window";
import { Bottom, IconWrapper } from "components/common/WindowStyle";
import { FcHome, FcFullTrash } from "react-icons/fc";
import styled from "styled-components";
import TrashFolder from "./TrashFolder";
import useToast from "hooks/useToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import StepBtn from "components/common/StepBtn";
import { motion } from "framer-motion";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = styled(motion.div)`
  width: 90%;
  position: absolute;
`;

const Chapter5Cut9 = () => {
  const [showTrashFolder, setShowTrashFolder] = useState(false);
  useToast("휴지통을 열어보자!");

  const handleHomeBtnClick = () => {
    setShowTrashFolder(true);
  };

  return (
    <Base>
      <Window>
        <Bottom>
          <ul>
            <li>
              <IconWrapper>
                <FcHome />
              </IconWrapper>
            </li>
            <li>
              <IconWrapper
                onClick={handleHomeBtnClick}
                cursor="true"
                hover="true"
              >
                <FcFullTrash />
              </IconWrapper>
            </li>
          </ul>
        </Bottom>
      </Window>
      {showTrashFolder && (
        <>
          <Animation
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.5, 1], scaleY: [0, 1.04, 1] }}
          >
            <TrashFolder isActive={false} />
          </Animation>
          <StepBtn />
        </>
      )}
      <ToastContainer />
    </Base>
  );
};

export default Chapter5Cut9;
