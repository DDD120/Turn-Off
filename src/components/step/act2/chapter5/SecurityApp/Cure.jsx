import React, { useState } from "react";
import styled from "styled-components";
import { GiMedicines } from "react-icons/gi";
import { motion } from "framer-motion";
import Loading from "components/common/Loading";

const Base = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  flex: 1;

  svg {
    font-size: 6rem;
    color: #66a80f;
  }
  p {
    font-size: 0.8rem;
    margin: 4px 0;
    color: #868e96;
  }
`;

const ProgressBar = styled.div`
  margin: 20px 0;
  height: 8px;
  border-radius: 12px;
  background-color: #dee2e6;
  position: relative;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  position: absolute;
  left: 0;
  height: 8px;
  background-color: #66a80f;
`;

const Cure = ({ setCompletion }) => {
  const [isLoading, setIsLoading] = useState(false);

  const loading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCompletion(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Base>
      {isLoading ? (
        <Loading />
      ) : (
        <Content>
          <motion.div>
            <GiMedicines />
          </motion.div>
          <h1>치료중</h1>
          <p> 잠시만 기다려 주세요···</p>
          <ProgressBar>
            <Progress
              animate={{ width: ["0%", "10%", "50%", "80%", "90%", "100%"] }}
              transition={{ duration: 6 }}
              onAnimationComplete={loading}
            />
          </ProgressBar>
        </Content>
      )}
    </Base>
  );
};

export default Cure;
