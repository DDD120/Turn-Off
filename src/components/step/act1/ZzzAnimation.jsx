import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Zzz = styled(motion.span)`
  position: absolute;
  top: 30%;
  right: 70px;
  font-weight: bold;
`;

const ZzzAnimation = () => {
  return (
    <>
      <Zzz
        initial={{ opacity: 0 }}
        animate={{
          y: [0, -10, -20, -40, -60],
          x: [0, 10, -10, 10, -10],
          opacity: [0, 1, 0],
          transition: {
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          },
        }}
      >
        Z
      </Zzz>
      <Zzz
        initial={{ opacity: 0 }}
        animate={{
          y: [0, -10, -20, -40, -60],
          x: [0, 10, -10, 10, -10],
          opacity: [0, 1, 0],
          transition: {
            repeat: Infinity,
            duration: 3,
            ease: "linear",
            delay: 1.5,
          },
        }}
      >
        Z
      </Zzz>
    </>
  );
};

export default ZzzAnimation;
