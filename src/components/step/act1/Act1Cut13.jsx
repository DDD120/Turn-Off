import styled from "styled-components";
import { motion } from "framer-motion";
import WavyText from "./WavyText";
import StepBtn from "components/common/StepBtn";
import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Base = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Chat = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 2rem;
  color: #3b3939;
`;

const CutContainer = styled(motion.div)`
  width: 80%;
  z-index: 1;
`;

const text =
  "끄아아아악!!!! 왜 잠이 안오는 건데! 너무 피곤하고 졸려 죽겠는데 왜 잠을 못드는 거냐고!!! 자고 싶어도 못자는 이 상황이 괴로워 죽겠다!!! 지금 다크써클이 턱 밑까지 내려왔겠다 심지어 내일 약속도 있어서 빨리 나가야 되는데 이러다간 밤 새는 거 아냐? 몇 시간 후면 해 뜨겠네 이거 실화냐 약속 끝나고 낮에 자게 되면 생활패턴 바뀌는 건 싫은데 나도 누우면 10초만에 잠들고 싶다고!!! 뭐가 문제냐 지금 나만 깨어있는 이 상황이 제일 서러워ㅠㅠ 분명 11시부터 누워있었다고 근데 왜 지금 4시가 다 되가는 건데 끄아아아악!!!! 왜 잠이 안오는 건데! 너무 피곤하고 졸려 죽겠는데 왜 잠을 못드는 거냐고!!! 자고 싶어도 못자는 이 상황이 괴로워 죽겠다!!! 지금 다크써클이 턱 밑까지 내려왔겠다 심지어 내일 약속도 있어서 빨리 나가야 되는데 이러다간 밤 새는 거 아냐? 몇 시간 후면 해 뜨겠네 이거 실화냐 약속 끝나고 낮에 자게 되면 생활패턴 바뀌는 건 싫은데 나도 누우면 10초만에 잠들고 싶다고!!! 뭐가 문제냐 지금 나만 깨어있는 이 상황이 제일 서러워ㅠㅠ 분명 11시부터 누워있었다고 근데 왜 지금 4시가 다 되가는 건데";

const Act1Cut13 = () => {
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowBtn(true);
    }, 2000);
  }, []);

  return (
    <Base>
      <Chat>
        <WavyText text={text} />
      </Chat>
      <CutContainer
        initial={{ y: 10 }}
        animate={{ y: [10, -10] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.4,
        }}
      >
        <StaticImage
          width={453}
          height={277}
          src="../../../images/act1/act1_13-1.webp"
          alt="괴로워하는 승현"
          layout="constrained"
          placeholder="none"
        />
      </CutContainer>

      {isShowBtn && <StepBtn />}
    </Base>
  );
};

export default Act1Cut13;
