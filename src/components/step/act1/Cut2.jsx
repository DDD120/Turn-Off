import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import StepBtn from "components/common/StepBtn";
import { DefaultText } from "components/common/GlobalStyle";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
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
            <StaticImage
              width={364}
              height={484}
              src="../../../images/act1/cut2-1.webp"
              alt="글쓰는 장면"
              layout="constrained"
            />
          </CutContainer>
          <Chat>
            <StaticImage
              width={327}
              height={228}
              src="../../../images/bubble/bubble-3.webp"
              alt="말풍선"
              layout="constrained"
            />
            <DefaultText>누군가는 한창 깨어있을 시간이고</DefaultText>
          </Chat>
        </Box>
        <Box
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ delay: 0.5 }}
        >
          <Chat>
            <StaticImage
              width={327}
              height={228}
              src="../../../images/bubble/bubble-3.webp"
              alt="말풍선"
              layout="constrained"
            />
            <DefaultText>마음이 복잡해질 시간이기도 한다.</DefaultText>
          </Chat>
          <CutContainer>
            <StaticImage
              width={364}
              height={484}
              src="../../../images/act1/cut2-2.webp"
              alt="글쓰는 장면"
              layout="constrained"
              placeholder="none"
            />
          </CutContainer>
        </Box>
        <StepBtn />
      </div>
    </Base>
  );
};

export default Cut2;
