import React from "react"
import {
  FcDocument,
  FcImageFile,
  FcFile,
  FcFolder,
  FcFilm,
  FcAudioFile,
  FcPuzzle,
  FcCommandLine,
} from "react-icons/fc"
import styled from "styled-components"

const File = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 2px 0;
`

const TrashFiles = () => {
  return (
    <ul>
      <File>
        <FcDocument />
        <span>제목없음.txt</span>
      </File>
      <File>
        <FcDocument />
        <span>제목없음(1).txt</span>
      </File>
      <File>
        <FcDocument />
        <span>실습 두번째.txt</span>
      </File>
      <File>
        <FcImageFile />
        <span>AdobaStock_410533065.png</span>
      </File>
      <File>
        <FcImageFile />
        <span>AdobaStock_1394353589.png</span>
      </File>
      <File>
        <FcImageFile />
        <span>하늘20221023.jpg</span>
      </File>
      <File>
        <FcFile />
        <span>영화와 예술 과제 제출.hwp</span>
      </File>
      <File>
        <FcFolder />
        <span>ipTIME</span>
      </File>
      <File>
        <FcFilm />
        <span>vlog.mp4</span>
      </File>
      <File>
        <FcAudioFile />
        <span>20220915 강의 녹음.mp3</span>
      </File>
      <File>
        <FcFile />
        <span>공지.hwp</span>
      </File>
      <File>
        <FcPuzzle />
        <span>EMplayer</span>
      </File>
      <File>
        <FcCommandLine />
        <span>command</span>
      </File>
      <File>
        <FcFolder />
        <span>직박구리</span>
      </File>
      <File>
        <FcFile />
        <span>2022 행사 안내.doxc</span>
      </File>
      <File>
        <FcDocument />
        <span>메모.txt</span>
      </File>
      <File>
        <FcDocument />
        <span>연습장.txt</span>
      </File>
      <File>
        <FcFile />
        <span>시나리오.docx</span>
      </File>
      <File>
        <FcPuzzle />
        <span>sdfsddfs.mp3</span>
      </File>
      <File>
        <FcCommandLine />
        <span>console</span>
      </File>
      <File>
        <FcImageFile />
        <span>summer.jpg</span>
      </File>
      <File>
        <FcImageFile />
        <span>누끼-1.jpg</span>
      </File>
      <File>
        <FcImageFile />
        <span>뭉게11.jpg</span>
      </File>
      <File>
        <FcAudioFile />
        <span>20220915 강의 녹음.mp3</span>
      </File>
      <File>
        <FcFile />
        <span>시나리오.docx</span>
      </File>
      <File>
        <FcFolder />
        <span>키키오톡 받은 파일</span>
      </File>
      <File>
        <FcImageFile />
        <span>친구들과 함께.jpg</span>
      </File>
      <File>
        <FcImageFile />
        <span>2022103104895794334asfd.jpg</span>
      </File>
      <File>
        <FcPuzzle />
        <span>레스티러이크</span>
      </File>
      <File>
        <FcDocument />
        <span>버려진 기억.txt</span>
      </File>
      <File>
        <FcDocument />
        <span>여행 준비물 챙길 것.txt</span>
      </File>
      <File>
        <FcImageFile />
        <span>커피랑 베이글.jpg</span>
      </File>
    </ul>
  )
}

export default TrashFiles
