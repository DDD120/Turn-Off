import React, {
  createContext,
  useEffect,
  useContext,
  useMemo,
  useState,
} from "react"
const ControlContext = createContext()

const ControlProvider = ({ children }) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    setStep(Number(localStorage.getItem("step")) ?? 0)
  }, [])

  const action = useMemo(
    () => ({
      set(step) {
        setStep(step)
        localStorage.setItem("step", step)
      },
    }),
    []
  )

  const value = useMemo(() => ({ step, action }), [step, action])

  return (
    <ControlContext.Provider value={value}>{children}</ControlContext.Provider>
  )
}

const useControl = () => {
  const value = useContext(ControlContext)
  if (value === undefined) {
    throw new Error("useControl should be used within ProgressProvider")
  }
  return value
}

export { ControlProvider, useControl }
