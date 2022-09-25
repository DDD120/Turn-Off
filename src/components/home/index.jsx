import React from "react";
import { useProgress } from "store/progress";
import Main from "./Main";
import StepControl from "./StepControl";

const Home = () => {
  const { startReading } = useProgress();

  return <>{startReading ? <StepControl /> : <Main />}</>;
};

export default Home;
