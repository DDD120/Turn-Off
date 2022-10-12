import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useToast from "hooks/useToast";
import SecurityApp from "./SecurityApp";
import { motion } from "framer-motion";

const Base = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecurityAppWrapper = styled(motion.div)`
  width: 90%;
  position: absolute;
`;

const Cut50 = () => {
  // eslint-disable-next-line no-unused-vars
  const Toast = useToast("상태를 안전하게 바꿔보자");

  return (
    <Base>
      <SecurityAppWrapper>
        <SecurityApp />
      </SecurityAppWrapper>
      <ToastContainer />
    </Base>
  );
};

export default Cut50;
