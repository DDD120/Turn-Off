import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Switch = styled(motion.button)`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 40px;
  border: 2px solid #fff;
  background-color: rgba(43, 40, 40, 0.185);
  display: flex;
  justify-content: ${({ $isDark }) => ($isDark ? "flex-end" : "flex-start")};
  align-items: center;
  border-radius: 50px;
  padding: 4px;
  z-index: 1;
  cursor: pointer;
`;

const Handle = styled(motion.div)`
  width: 30px;
  height: 30px;
  background-color: #ffd986;
  border-radius: 50%;

  ${({ $isDark }) =>
    $isDark &&
    css`
      background-color: transparent;
      box-shadow: inset -8px -8px 1px 1px #fff;
    `}
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const ToggleBtn = ({ isDark, setIsDark }) => {
  const toggleSwitch = () => setIsDark(!isDark);

  return (
    <Switch
      type="button"
      $isDark={isDark}
      onClick={toggleSwitch}
      initial={{ translateX: "-50%" }}
      whileTap={{ scale: 0.8 }}
    >
      <Handle $isDark={isDark} layout transition={spring} />
    </Switch>
  );
};

export default ToggleBtn;
