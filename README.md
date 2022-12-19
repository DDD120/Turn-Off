# [Turn Off](https://turn-off.netlify.app/)

## 작품 개요
- 2022 전기 강원대학교 영상문화학과 졸업작품 
- 형식 : 인터랙티브 웹툰
- 장르 : 일상, 판타지, 모험
- 스토리
늦은 밤, 승현은 잠이 오지 않아 괴로워한다. 승현의 반려견 뭉게는 꿈속에서 승현의 생각(컴퓨터)과 연결하게 되고, 컴퓨터 종료할 수 있도록 도와준다. 5개의 프로그램들을 종료 후 컴퓨터를 끄게 된 뭉게. 아침이 되고 언제 잠이 든 건지 개운하게 일어난 승현은 기운차게 하루를 시작한다.

## 주요 기술 스택
- gatsby
- styled-components
- react context api
- framer-motion

## 구조
- 게임적 요소들을 넣어 단계별로 미션을 해결해 나아가는 구조
- click event를 통한 이야기 진행
- 단계별 미션
	1. 메모장 지우기
	2. 메시지 답장
	3. 사진 보정
	4. 영상 시청 기록 지우기
	5. 보안 최적화, 치료 작업 진행
	6. 휴지통 비우기


## 주요 기능 구현
### framer-motion 라이브러리를 사용한  CSS 애니메이션
#### - 컷 등장 애니메이션
<img src="https://user-images.githubusercontent.com/74492479/208357791-0478230c-b59d-4187-8ae3-2ec50b12c7e2.gif" width="300px" alt="컷 애니메이션"/>

#### - 격동적인 텍스트 애니메이션
<img src="https://user-images.githubusercontent.com/74492479/208360034-f69f9937-2088-4189-8986-eeab5e77f948.gif"  width="300px"  alt="텍스트 애니메이션" />


#### - 요소 drag 

<img src="https://user-images.githubusercontent.com/74492479/208416260-32183c55-e5f3-4a2b-8545-7bf248c79aa6.gif"  width="300px"  alt="요소 드래그  애니메이션" />

---

### 메시지 어플리케이션
#### - 메시지 전송 기능
<img src="https://user-images.githubusercontent.com/74492479/208416974-56dba91a-5ebf-4856-b1ec-28935f39c955.gif"  width="300px"  alt="일반적인 메시지 전송" />

#### - 부적절한 단어 사용 방지

<img src="https://user-images.githubusercontent.com/74492479/208417683-2bb60bc5-aa92-4b3f-ae8d-ab32e7079ac1.gif"  width="300px"  alt="부적절한 메시지 전송" />


---

### 색보정 어플리케이션
#### - CSS filter 속성을 사용한 간단 색 보정
<img src="https://user-images.githubusercontent.com/74492479/208418490-497d23c0-8171-4cee-ae44-ec3ca16ec45b.gif"  width="300px"  alt="색 보정" />

---
### 조건에 따른 버튼 활성화
#### - button 모두 on 일 경우 활성화

<img src="https://user-images.githubusercontent.com/74492479/208425002-7cbb4bf5-4d26-4ab7-9a82-5baa7ffeeae6.gif"  width="300px"  alt="버튼 조건 활성화" />

#### - radio, select, check box 등 input 요소 체크 관리

<img src="https://user-images.githubusercontent.com/74492479/208426587-9d09d07e-c91a-4a33-961a-17e026730e50.gif"  width="300px"  alt="버튼 조건 활성화" />


---
### react context api를 사용한 진행 단계 관리

#### - 진행 단계 관리 및 저장, 홈으로 이동 기능  
#### - 로컬스토리지를  통한 이어보기 기능
---

### electron을 사용한 데스크탑 어플리케이션 배포
#### - electron-builder를 통한 exe 실행 파일 빌드
---
### 그외
- react-full-screen 라이브러리를 사용한 화면 full screen 기능
- react-toastify 라이브러리를 사용한 toast 기능



