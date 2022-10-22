import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import BUBBLE3URL from "images/bubble/bubble-3.webp";
import IMG1URL from "images/act1/cut2-1.webp";
import IMG2URL from "images/act1/cut2-2.webp";
import { IMAGE, TEXT } from "components/common/GlobalStyle";

const Base = styled.div`
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #fff, #001220);
  & > div {
    width: 90%;
    margin: 0 auto;
  }
`;

const Box = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CutContainer = styled.div`
  width: 50%;
`;

const Chat = styled.div`
  position: relative;
  width: 50%;
`;

const Cut2 = () => {
  return (
    <Base>
      <div>
        <Box initial={{ opacity: 0 }} animate={{ opacity: [0, 1], y: [10, 0] }}>
          <CutContainer>
            <IMAGE width="364" height="484" src={IMG1URL} alt="글쓰는 장면" />
          </CutContainer>
          <Chat>
            <IMAGE width="327" height="228" src={BUBBLE3URL} alt="말풍선" />
            <TEXT>누군가는 한창 깨어있을 시간이고</TEXT>
          </Chat>
        </Box>
        <Box
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ delay: 0.5 }}
        >
          <Chat>
            <IMAGE width="327" height="228" src={BUBBLE3URL} alt="말풍선" />
            <TEXT>마음이 복잡해질 시간이기도 한다.</TEXT>
          </Chat>
          <CutContainer>
            <IMAGE width="364" height="484" src={IMG2URL} alt="글쓰는 장면" />
          </CutContainer>
        </Box>
        <StepBtn />
      </div>
    </Base>
  );
};

export default Cut2;
