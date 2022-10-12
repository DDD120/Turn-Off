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
import Cut21 from "components/step/act2/chapter2/Cut21";
import Cut22 from "components/step/act2/chapter2/Cut22";
import Cut23 from "components/step/act2/chapter2/Cut23";
import Cut24 from "components/step/act2/chapter2/Cut24";
import Cut25 from "components/step/act2/chapter2/Cut25";
import Cut26 from "components/step/act2/chapter2/Cut26";
import Cut27 from "components/step/act2/chapter2/Cut27";
import Cut28 from "components/step/act2/chapter2/Cut28";
import Cut29 from "components/step/act2/chapter2/Cut29";
import Cut30 from "components/step/act2/chapter2/Cut30";
import Cut31 from "components/step/act2/chapter3/Cut31";
import Cut32 from "components/step/act2/chapter3/Cut32";
import Cut33 from "components/step/act2/chapter3/Cut33";
import Cut34 from "components/step/act2/chapter3/Cut34";
import Cut35 from "components/step/act2/chapter3/Cut35";
import Cut36 from "components/step/act2/chapter3/Cut36";
import Cut37 from "components/step/act2/chapter3/Cut37";
import Cut38 from "components/step/act2/chapter3/Cut38";
import Cut39 from "components/step/act2/chapter3/Cut39";
import Cut40 from "components/step/act2/chapter4/Cut40";
import Cut41 from "components/step/act2/chapter4/Cut41";
import Cut42 from "components/step/act2/chapter4/Cut42";
import Cut43 from "components/step/act2/chapter4/Cut43";
import Cut44 from "components/step/act2/chapter4/Cut44";
import Cut45 from "components/step/act2/chapter4/Cut45";
import Cut46 from "components/step/act2/chapter4/Cut46";
import Cut47 from "components/step/act2/chapter5/Cut47";
import Cut48 from "components/step/act2/chapter5/Cut48";
import Cut49 from "components/step/act2/chapter5/Cut49";
import Cut50 from "components/step/act2/chapter5/Cut50";
import Cut51 from "components/step/act2/chapter5/Cut51";

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
      {step === 21 && <Cut21 />}
      {step === 22 && <Cut22 />}
      {step === 23 && <Cut23 />}
      {step === 24 && <Cut24 />}
      {step === 25 && <Cut25 />}
      {step === 26 && <Cut26 />}
      {step === 27 && <Cut27 />}
      {step === 28 && <Cut28 />}
      {step === 29 && <Cut29 />}
      {step === 30 && <Cut30 />}
      {step === 31 && <Cut31 />}
      {step === 32 && <Cut32 />}
      {step === 33 && <Cut33 />}
      {step === 34 && <Cut34 />}
      {step === 35 && <Cut35 />}
      {step === 36 && <Cut36 />}
      {step === 37 && <Cut37 />}
      {step === 38 && <Cut38 />}
      {step === 39 && <Cut39 />}
      {step === 40 && <Cut40 />}
      {step === 41 && <Cut41 />}
      {step === 42 && <Cut42 />}
      {step === 43 && <Cut43 />}
      {step === 44 && <Cut44 />}
      {step === 45 && <Cut45 />}
      {step === 46 && <Cut46 />}
      {step === 47 && <Cut47 />}
      {step === 48 && <Cut48 />}
      {step === 49 && <Cut49 />}
      {step === 50 && <Cut50 />}
      {step === 51 && <Cut51 />}
    </>
  );
};

export default StepControl;
