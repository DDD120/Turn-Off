import React, { useEffect } from "react"
import loadable from "@loadable/component"
import { useControl } from "context/control"

const preloadComponent = (path) => {
  return loadable(() => import(`components/step/${path}`), {
    cacheKey: () => path,
  })
}

const Component = loadable(({ path }) => import(`components/step/${path}`), {
  cacheKey: (props) => props.path,
})

const stepComponentsPath = [
  null,
  "act1/Act1Cut1",
  "act1/Act1Cut2",
  "act1/Act1Cut3",
  "act1/Act1Cut4",
  "act1/Act1Cut5",
  "act1/Act1Cut6",
  "act1/Act1Cut7",
  "act1/Act1Cut8",
  "act1/Act1Cut9",
  "act1/Act1Cut10",
  "act1/Act1Cut11",
  "act1/Act1Cut12",
  "act1/Act1Cut13",
  "act1/Act1Cut14",
  "act1/Act1Cut15",
  "act1/Act1Cut16",
  "act1/Act1Cut17",
  "act2/chapter1/Chapter1Cut1",
  "act2/chapter1/Chapter1Cut2",
  "act2/chapter1/Chapter1Cut3",
  "act2/chapter1/Chapter1Cut4",
  "act2/chapter1/Chapter1Cut5",
  "act2/chapter1/Chapter1Cut6",
  "act2/chapter1/Chapter1Cut7",
  "act2/chapter1/Chapter1Cut8",
  "act2/chapter1/Chapter1Cut9",
  "act2/chapter1/Chapter1Cut10",
  "act2/chapter1/Chapter1Cut11",
  "act2/chapter2/Chapter2Cut1",
  "act2/chapter2/Chapter2Cut2",
  "act2/chapter2/Chapter2Cut3",
  "act2/chapter2/Chapter2Cut4",
  "act2/chapter2/Chapter2Cut5",
  "act2/chapter2/Chapter2Cut6",
  "act2/chapter2/Chapter2Cut7",
  "act2/chapter2/Chapter2Cut8",
  "act2/chapter2/Chapter2Cut9",
  "act2/chapter2/Chapter2Cut10",
  "act2/chapter3/Chapter3Cut1",
  "act2/chapter3/Chapter3Cut2",
  "act2/chapter3/Chapter3Cut3",
  "act2/chapter3/Chapter3Cut4",
  "act2/chapter3/Chapter3Cut5",
  "act2/chapter3/Chapter3Cut6",
  "act2/chapter3/Chapter3Cut7",
  "act2/chapter3/Chapter3Cut8",
  "act2/chapter3/Chapter3Cut9",
  "act2/chapter4/Chapter4Cut1",
  "act2/chapter4/Chapter4Cut2",
  "act2/chapter4/Chapter4Cut3",
  "act2/chapter4/Chapter4Cut4",
  "act2/chapter4/Chapter4Cut5",
  "act2/chapter4/Chapter4Cut6",
  "act2/chapter4/Chapter4Cut7",
  "act2/chapter5/Chapter5Cut1",
  "act2/chapter5/Chapter5Cut2",
  "act2/chapter5/Chapter5Cut3",
  "act2/chapter5/Chapter5Cut4",
  "act2/chapter5/Chapter5Cut5",
  "act2/chapter5/Chapter5Cut6",
  "act2/chapter5/Chapter5Cut7",
  "act2/chapter5/Chapter5Cut8",
  "act2/chapter5/Chapter5Cut9",
  "act2/chapter5/Chapter5Cut10",
  "act2/chapter5/Chapter5Cut11",
  "act2/chapter5/Chapter5Cut12",
  "act2/chapter5/Chapter5Cut13",
  "act2/chapter5/Chapter5Cut14",
  "act2/chapter5/Chapter5Cut15",
  "act2/chapter5/Chapter5Cut16",
  "act2/chapter5/Chapter5Cut17",
  "act3/Act3Cut1",
  "act3/Act3Cut2",
  "act3/Act3Cut3",
  "act3/Act3Cut4",
  "act3/Act3Cut5",
  "act3/Act3Cut6",
  "act3/Act3Cut7",
  "act3/Act3Cut8",
  "act3/Act3Cut9",
]

const StepControl = ({ pageContext }) => {
  const { step } = pageContext
  const { action } = useControl()

  useEffect(() => {
    action.set(step)
    if (step < stepComponentsPath.length - 1) {
      preloadComponent(stepComponentsPath[step + 1]).preload()
    }
  }, [step, action])

  return <Component path={stepComponentsPath[step]} />
}

export default StepControl
