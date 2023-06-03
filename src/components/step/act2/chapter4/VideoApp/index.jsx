import React, { useState } from "react"
import styled from "styled-components"
import { useRef } from "react"
import VideoHeader from "./VideoHeader"
import ViewHistoryList from "./ViewHistoryList"
import SettingModal from "./SettingModal"
import IMG1URL from "images/act2/chapter4/thumbnail-1.webp"
import IMG2URL from "images/act2/chapter4/thumbnail-2.webp"
import IMG3URL from "images/act2/chapter4/thumbnail-3.webp"
import IMG4URL from "images/act2/chapter4/thumbnail-4.webp"
import IMG5URL from "images/act2/chapter4/thumbnail-5.webp"
import IMG6URL from "images/act2/chapter4/thumbnail-6.webp"
import IMG7URL from "images/act2/chapter4/thumbnail-7.webp"
import IMG8URL from "images/act2/chapter4/thumbnail-8.webp"
import IMG9URL from "images/act2/chapter4/thumbnail-9.webp"
import IMG10URL from "images/act2/chapter4/thumbnail-10.webp"

const Base = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #c9ccd5;
  border-radius: 4px;
  position: relative;
`

const Footer = styled.footer`
  height: 20px;
`

let videos = [
  {
    thumbnail: IMG1URL,
    title: "🔥장작타는 소리 ASMR | [집중할 때, 불멍, 스터디윗미, 백색소음] ",
    running_time: "3:00:12",
    current_time: "30%",
  },
  {
    thumbnail: IMG2URL,
    title: "[공포실화] 소름돋는 레전드 공포썰 모음.zip",
    running_time: "22:12",
    current_time: "80%",
  },
  {
    thumbnail: IMG3URL,
    title:
      "혀가 얼얼한 매운맛 5단계 마라탕 도전! (ft. 꿔바로우) MUCBANG EATING SHOW",
    running_time: "6:53",
    current_time: "100%",
  },
  {
    thumbnail: IMG4URL,
    title: "INFP와 ESTJ가 만난다면? #MBTI #소개팅 #첫만남",
    running_time: "12:34",
    current_time: "20%",
  },
  {
    thumbnail: IMG5URL,
    title: "✨ 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 | 지금은 케이팝 여돌 전성기! 최신곡 노래 모음 ♬ ✨",
    running_time: "48:32",
    current_time: "50%",
  },
  {
    thumbnail: IMG6URL,
    title: "지구에 관한 놀라운 7가지 사실",
    running_time: "8:22",
    current_time: "70%",
  },
  {
    thumbnail: IMG7URL,
    title: "남자가 바다거북스프를 먹고 자살한 이유는? [바다거북스프]",
    running_time: "15:30",
    current_time: "60%",
  },
  {
    thumbnail: IMG8URL,
    title:
      "[VLOG] 일상 브이로그 | 갓생살기 | 겟레디윗미 | 혼자서 호캉스 | 연남동 카페거리 | 먹방 모음",
    running_time: "18:45",
    current_time: "90%",
  },
  {
    thumbnail: IMG9URL,
    title: "야구공 절대 안놔주는 코코 ㅋㅋㅋㅋ",
    running_time: "1:27",
    current_time: "30%",
  },
  {
    thumbnail: IMG10URL,
    title: "HOT LIVE! Sun 'Ocean' [필스 더 라디오] | FHY 20221017 방송",
    running_time: "3:34",
    current_time: "60%",
  },
]

const VideoApp = ({ isActive, closeVideoApp }) => {
  const modalRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isActiveViewHistory, setIsActiveViewHistory] = useState(false)
  const [isActiveAlgorithm, setIsActiveAlgorithm] = useState(false)

  const handleSettingBtnClick = () => {
    if (isActiveViewHistory && isActiveAlgorithm) return
    if (isActive) modalRef.current.showModal()
  }
  const handleApplyBtnClick = () => {
    if (isActiveViewHistory && isActiveAlgorithm) {
      modalRef.current.close()
      setIsLoading(true)
      videos = []
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      setTimeout(() => {
        closeVideoApp()
      }, 3000)
    }
  }

  return (
    <Base>
      <VideoHeader />
      <ViewHistoryList
        videos={videos}
        isLoading={isLoading}
        onSettingBtnClick={handleSettingBtnClick}
      />
      <SettingModal
        modalRef={modalRef}
        isActiveViewHistory={isActiveViewHistory}
        setIsActiveViewHistory={setIsActiveViewHistory}
        isActiveAlgorithm={isActiveAlgorithm}
        setIsActiveAlgorithm={setIsActiveAlgorithm}
        onApplyBtnClick={handleApplyBtnClick}
      />
      <Footer />
    </Base>
  )
}

export default VideoApp
