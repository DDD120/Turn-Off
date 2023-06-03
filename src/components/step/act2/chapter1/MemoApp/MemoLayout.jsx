import React, { useEffect, useRef, useState } from "react"
import Memo from "./Memo"
import { motion } from "framer-motion"

const container = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const MemoLayout = ({ dragRef, initial, setHasChildElement = false }) => {
  const memoLayoutRef = useRef(null)
  const [closeCount, setCloseCount] = useState(0)

  useEffect(() => {
    memoLayoutRef.current.childNodes.length === 0 && setHasChildElement(false)
  }, [setHasChildElement, closeCount])

  return (
    <motion.div
      ref={memoLayoutRef}
      variants={initial ? container : undefined}
      initial="start"
      animate="end"
    >
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="320"
        h="160"
        top="24"
        right="40"
      >
        난 몰랐어 내 맘이 이리 다채로운지
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="220"
        h="80"
        left="60"
        bottom="80"
      >
        오버워치 하고 싶다.
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="430"
        h="234"
        top="240"
        left="20"
      >
        내일 점심 뭐 먹지?
        <br />
        마라탕, 떡볶이, 햄버거, 피자, 연어덮밥, 갈비찜, 닭볶음탕, 부대찌개,
        돈까스, 파스타, 리조또, 치킨, 꿔바로우, 쌀국수....
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="480"
        h="100"
        bottom="200"
        right="-200"
      >
        졸린데 잠이 안와
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="320"
        h="160"
        top="120"
        left="40"
      >
        이럴거면 유튜브 하나 더 보고 잘까
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="260"
        h="240"
        bottom="10"
        right="-10"
      >
        아까 잡았던 벌레 또 나오면 어떡하지???
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="270"
        h="180"
        top="-20"
        left="-40"
      >
        내일 빨리 일어나야 하는데...
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="240"
        h="200"
        left="-30"
        bottom="120"
      >
        콘서트 예매 떨려
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="300"
        h="100"
        top="230"
        right="-80"
      >
        휘뚜루마뚜루
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="240"
        h="120"
        top="300"
        right="-80"
      >
        아까 샴푸 다 썼던데 샴푸도 사야겠다
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="150"
        h="250"
        bottom="20"
        left="10"
      >
        요즘 날씨 너무 좋다
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="200"
        h="190"
        top="10"
        right="-80"
      >
        오늘 먹은 김치찌개 맛있었당
      </Memo>
      <Memo
        dragRef={dragRef}
        initial={initial}
        setCloseCount={setCloseCount}
        w="200"
        h="200"
        top="260"
        left="60"
      >
        과제 이번주까지인데...빨리 해야하는데....
      </Memo>
    </motion.div>
  )
}

export default MemoLayout
