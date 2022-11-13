import React, { Suspense, lazy } from "react";
import { useProgress } from "store/progress";
import Main from "./Main";
const Act1Cut1 = lazy(() => import("components/step/act1/Act1Cut1"));
const Act1Cut2 = lazy(() => import("components/step/act1/Act1Cut2"));
const Act1Cut3 = lazy(() => import("components/step/act1/Act1Cut3"));
const Act1Cut4 = lazy(() => import("components/step/act1/Act1Cut4"));
const Act1Cut5 = lazy(() => import("components/step/act1/Act1Cut5"));
const Act1Cut6 = lazy(() => import("components/step/act1/Act1Cut6"));
const Act1Cut7 = lazy(() => import("components/step/act1/Act1Cut7"));
const Act1Cut8 = lazy(() => import("components/step/act1/Act1Cut8"));
const Act1Cut9 = lazy(() => import("components/step/act1/Act1Cut9"));
const Act1Cut10 = lazy(() => import("components/step/act1/Act1Cut10"));
const Act1Cut11 = lazy(() => import("components/step/act1/Act1Cut11"));
const Act1Cut12 = lazy(() => import("components/step/act1/Act1Cut12"));
const Act1Cut13 = lazy(() => import("components/step/act1/Act1Cut13"));
const Act1Cut14 = lazy(() => import("components/step/act1/Act1Cut14"));
const Act1Cut15 = lazy(() => import("components/step/act1/Act1Cut15"));
const Act1Cut16 = lazy(() => import("components/step/act1/Act1Cut16"));
const Act1Cut17 = lazy(() => import("components/step/act1/Act1Cut17"));
const Chapter1Cut1 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut1")
);
const Chapter1Cut2 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut2")
);
const Chapter1Cut3 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut3")
);
const Chapter1Cut4 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut4")
);
const Chapter1Cut5 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut5")
);
const Chapter1Cut6 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut6")
);
const Chapter1Cut7 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut7")
);
const Chapter1Cut8 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut8")
);
const Chapter1Cut9 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut9")
);
const Chapter1Cut10 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut10")
);
const Chapter1Cut11 = lazy(() =>
  import("components/step/act2/chapter1/Chapter1Cut11")
);
const Chapter2Cut1 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut1")
);
const Chapter2Cut2 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut2")
);
const Chapter2Cut3 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut3")
);
const Chapter2Cut4 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut4")
);
const Chapter2Cut5 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut5")
);
const Chapter2Cut6 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut6")
);
const Chapter2Cut7 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut7")
);
const Chapter2Cut8 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut8")
);
const Chapter2Cut9 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut9")
);
const Chapter2Cut10 = lazy(() =>
  import("components/step/act2/chapter2/Chapter2Cut10")
);
const Chapter3Cut1 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut1")
);
const Chapter3Cut2 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut2")
);
const Chapter3Cut3 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut3")
);
const Chapter3Cut4 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut4")
);
const Chapter3Cut5 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut5")
);
const Chapter3Cut6 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut6")
);
const Chapter3Cut7 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut7")
);
const Chapter3Cut8 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut8")
);
const Chapter3Cut9 = lazy(() =>
  import("components/step/act2/chapter3/Chapter3Cut9")
);
const Chapter4Cut1 = lazy(() =>
  import("components/step/act2/chapter4/Chapter4Cut1")
);
const Chapter4Cut2 = lazy(() =>
  import("components/step/act2/chapter4/Chapter4Cut2")
);
const Chapter4Cut3 = lazy(() =>
  import("components/step/act2/chapter4/Chapter4Cut3")
);
const Chapter4Cut4 = lazy(() =>
  import("components/step/act2/chapter4/Chapter4Cut4")
);
const Chapter4Cut5 = lazy(() =>
  import("components/step/act2/chapter4/Chapter4Cut5")
);
const Chapter4Cut6 = lazy(() =>
  import("components/step/act2/chapter4/Chapter4Cut6")
);
const Chapter4Cut7 = lazy(() =>
  import("components/step/act2/chapter4/Chapter4Cut7")
);
const Chapter5Cut1 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut1")
);
const Chapter5Cut2 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut2")
);
const Chapter5Cut3 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut3")
);
const Chapter5Cut4 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut4")
);
const Chapter5Cut5 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut5")
);
const Chapter5Cut6 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut6")
);
const Chapter5Cut7 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut7")
);
const Chapter5Cut8 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut8")
);
const Chapter5Cut9 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut9")
);
const Chapter5Cut10 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut10")
);
const Chapter5Cut11 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut11")
);
const Chapter5Cut12 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut12")
);
const Chapter5Cut13 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut13")
);
const Chapter5Cut14 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut14")
);
const Chapter5Cut15 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut15")
);

const Chapter5Cut16 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut16")
);
const Chapter5Cut17 = lazy(() =>
  import("components/step/act2/chapter5/Chapter5Cut17.jsx")
);
const Act3Cut1 = lazy(() => import("components/step/act3/Act3Cut1"));
const Act3Cut2 = lazy(() => import("components/step/act3/Act3Cut2"));
const Act3Cut3 = lazy(() => import("components/step/act3/Act3Cut3"));
const Act3Cut4 = lazy(() => import("components/step/act3/Act3Cut4"));
const Act3Cut5 = lazy(() => import("components/step/act3/Act3Cut5"));
const Act3Cut6 = lazy(() => import("components/step/act3/Act3Cut6"));
const Act3Cut7 = lazy(() => import("components/step/act3/Act3Cut7"));
const Act3Cut8 = lazy(() => import("components/step/act3/Act3Cut8"));
const Act3Cut9 = lazy(() => import("components/step/act3/Act3Cut9"));

const StepControl = () => {
  const { step } = useProgress();

  return (
    <Suspense fallback={" "}>
      {step === 1 && <Act1Cut1 />}
      {step === 2 && <Act1Cut2 />}
      {step === 3 && <Act1Cut3 />}
      {step === 4 && <Act1Cut4 />}
      {step === 5 && <Act1Cut5 />}
      {step === 6 && <Act1Cut6 />}
      {step === 7 && <Act1Cut7 />}
      {step === 8 && <Act1Cut8 />}
      {step === 9 && <Act1Cut9 />}
      {step === 10 && <Act1Cut10 />}
      {step === 11 && <Act1Cut11 />}
      {step === 12 && <Act1Cut12 />}
      {step === 13 && <Act1Cut13 />}
      {step === 14 && <Act1Cut14 />}
      {step === 15 && <Act1Cut15 />}
      {step === 16 && <Act1Cut16 />}
      {step === 17 && <Act1Cut17 />}
      {step === 18 && <Chapter1Cut1 />}
      {step === 19 && <Chapter1Cut2 />}
      {step === 20 && <Chapter1Cut3 />}
      {step === 21 && <Chapter1Cut4 />}
      {step === 22 && <Chapter1Cut5 />}
      {step === 23 && <Chapter1Cut6 />}
      {step === 24 && <Chapter1Cut7 />}
      {step === 25 && <Chapter1Cut8 />}
      {step === 26 && <Chapter1Cut9 />}
      {step === 27 && <Chapter1Cut10 />}
      {step === 28 && <Chapter1Cut11 />}
      {step === 29 && <Chapter2Cut1 />}
      {step === 30 && <Chapter2Cut2 />}
      {step === 31 && <Chapter2Cut3 />}
      {step === 32 && <Chapter2Cut4 />}
      {step === 33 && <Chapter2Cut5 />}
      {step === 34 && <Chapter2Cut6 />}
      {step === 35 && <Chapter2Cut7 />}
      {step === 36 && <Chapter2Cut8 />}
      {step === 37 && <Chapter2Cut9 />}
      {step === 38 && <Chapter2Cut10 />}
      {step === 39 && <Chapter3Cut1 />}
      {step === 40 && <Chapter3Cut2 />}
      {step === 41 && <Chapter3Cut3 />}
      {step === 42 && <Chapter3Cut4 />}
      {step === 43 && <Chapter3Cut5 />}
      {step === 44 && <Chapter3Cut6 />}
      {step === 45 && <Chapter3Cut7 />}
      {step === 46 && <Chapter3Cut8 />}
      {step === 47 && <Chapter3Cut9 />}
      {step === 48 && <Chapter4Cut1 />}
      {step === 49 && <Chapter4Cut2 />}
      {step === 50 && <Chapter4Cut3 />}
      {step === 51 && <Chapter4Cut4 />}
      {step === 52 && <Chapter4Cut5 />}
      {step === 53 && <Chapter4Cut6 />}
      {step === 54 && <Chapter4Cut7 />}
      {step === 55 && <Chapter5Cut1 />}
      {step === 56 && <Chapter5Cut2 />}
      {step === 57 && <Chapter5Cut3 />}
      {step === 58 && <Chapter5Cut4 />}
      {step === 59 && <Chapter5Cut5 />}
      {step === 60 && <Chapter5Cut6 />}
      {step === 61 && <Chapter5Cut7 />}
      {step === 62 && <Chapter5Cut8 />}
      {step === 63 && <Chapter5Cut9 />}
      {step === 64 && <Chapter5Cut10 />}
      {step === 65 && <Chapter5Cut11 />}
      {step === 66 && <Chapter5Cut12 />}
      {step === 67 && <Chapter5Cut13 />}
      {step === 68 && <Chapter5Cut14 />}
      {step === 69 && <Chapter5Cut15 />}
      {step === 70 && <Chapter5Cut16 />}
      {step === 71 && <Chapter5Cut17 />}
      {step === 72 && <Act3Cut1 />}
      {step === 73 && <Act3Cut2 />}
      {step === 74 && <Act3Cut3 />}
      {step === 75 && <Act3Cut4 />}
      {step === 76 && <Act3Cut5 />}
      {step === 77 && <Act3Cut6 />}
      {step === 78 && <Act3Cut7 />}
      {step === 79 && <Act3Cut8 />}
      {step === 80 && <Act3Cut9 />}
      {(step < 1 || step > 80) && <Main />}
    </Suspense>
  );
};

export default StepControl;
