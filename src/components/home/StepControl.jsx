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
    </>
  );
};

export default StepControl;
