import React, { createContext, useContext, useMemo, useState } from "react";

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [startReading, setStartReading] = useState(false);
  const action = useMemo(
    () => ({
      new() {
        setStep(1);
        localStorage.setItem("step", 1);
      },
      decrease() {
        setStep((prev) => prev - 1);
        localStorage.setItem("step", step - 1);
      },
      increase() {
        setStep((prev) => prev + 1);
        localStorage.setItem("step", step + 1);
      },
      load() {
        const stepIndex = localStorage.getItem("step");
        setStep(Number(stepIndex));
      },
      isReading() {
        setStartReading(true);
      },
      goMain() {
        setStartReading(false);
      },
    }),
    [step]
  );

  const value = useMemo(
    () => ({ step, action, startReading, setStartReading }),
    [step, action, startReading, setStartReading]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

const useProgress = () => {
  const value = useContext(ProgressContext);
  if (value === undefined) {
    throw new Error("useProgress should be used within ProgressProvider");
  }
  return value;
};

export { ProgressProvider, useProgress };
