import React, { useState } from "react"
import styled from "styled-components"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import {
  AiOutlineFullscreenExit,
  AiOutlineFullscreen,
  AiFillHome,
} from "react-icons/ai"
import { Link } from "gatsby"

const Layout = styled.main`
  margin: 0 auto;
  max-width: 500px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
`

const Settings = styled.aside`
  padding: 4px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #eeeeee89;
  z-index: 9;
`

const FullscreenBtn = styled.button`
  padding: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
`

const Container = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const handle = useFullScreenHandle()

  const handleFullscreenBtnClick = () => {
    isFullscreen ? handle.enter() : handle.exit()
    setIsFullscreen((prev) => !prev)
  }

  return (
    <FullScreen handle={handle}>
      <Layout>
        <Settings>
          <FullscreenBtn
            type="button"
            onClick={handleFullscreenBtnClick}
            aria-label={
              isFullscreen ? "set not full screen" : "set full screen"
            }
          >
            {isFullscreen ? (
              <AiOutlineFullscreenExit />
            ) : (
              <AiOutlineFullscreen />
            )}
          </FullscreenBtn>
          <Link to="/">
            <AiFillHome />
          </Link>
        </Settings>
        {children}
      </Layout>
    </FullScreen>
  )
}

export default Container
