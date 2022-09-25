import React from "react";
import { useProgress } from "store/progress";
import Cut1 from "components/step/act1/Cut1";
import Cut2 from "components/step/act1/Cut2";
import Cut3 from "components/step/act1/Cut3";
import Cut4 from "components/step/act1/Cut4";
import Cut5 from "components/step/act1/Cut5";
import Cut6 from "components/step/act1/Cut6";
import Cut7 from "components/step/act1/Cut7";
import Cut8 from "components/step/act1/Cut8";
import Cut9 from "components/step/act1/Cut9";
import Cut10 from "components/step/act2/chapter1/Cut10";
import Cut11 from "components/step/act2/chapter1/Cut11";
import Cut12 from "components/step/act2/chapter1/Cut12";
import Cut13 from "components/step/act2/chapter1/Cut13";
import Cut14 from "components/step/act2/chapter1/Cut14";
import Cut15 from "components/step/act2/chapter1/Cut15";
import Cut16 from "components/step/act2/chapter1/Cut16";
import Cut17 from "components/step/act2/chapter1/Cut17";
import Cut18 from "components/step/act2/chapter1/Cut18";
import Cut19 from "components/step/act2/chapter1/Cut19";
import Cut20 from "components/step/act2/chapter1/Cut20";

const StepControl = () => {
  const { step } = useProgress();

  return (
    <>
      {step === 1 && <Cut1 />}
      {step === 2 && <Cut2 />}
      {step === 3 && <Cut3 />}
      {step === 4 && <Cut4 />}
      {step === 5 && <Cut5 />}
      {step === 6 && <Cut6 />}
      {step === 7 && <Cut7 />}
      {step === 8 && <Cut8 />}
      {step === 9 && <Cut9 />}
      {step === 10 && <Cut10 />}
      {step === 11 && <Cut11 />}
      {step === 12 && <Cut12 />}
      {step === 13 && <Cut13 />}
      {step === 14 && <Cut14 />}
      {step === 15 && <Cut15 />}
      {step === 16 && <Cut16 />}
      {step === 17 && <Cut17 />}
      {step === 18 && <Cut18 />}
      {step === 19 && <Cut19 />}
      {step === 20 && <Cut20 />}
    </>
  );
};

export default StepControl;
