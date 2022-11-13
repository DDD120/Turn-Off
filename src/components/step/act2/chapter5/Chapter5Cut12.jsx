import React, { useState } from "react";
import Window from "components/common/Window";
import { Bottom, IconWrapper } from "components/common/WindowStyle";
import { FcHome } from "react-icons/fc";
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

const Chapter5Cut12 = () => {
  const [showTrashFolder, setShowTrashFolder] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("휴지통을 비우자!");

  const handleCloseTrashFolder = () => {
    setShowTrashFolder(false);
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
          </ul>
        </Bottom>
      </Window>
      {showTrashFolder ? (
        <>
          <Animation exit={{ opacity: [0, 0.5, 1], scaleY: [0, 1.04, 1] }}>
            <TrashFolder
              isActive={true}
              handleCloseTrashFolder={handleCloseTrashFolder}
            />
          </Animation>
        </>
      ) : (
        <StepBtn />
      )}

      <ToastContainer />
    </Base>
  );
};

export default Chapter5Cut12;
