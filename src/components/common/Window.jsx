import React from "react"
import { FcFolder, FcSettings, FcFile, FcGoogle } from "react-icons/fc"
import { Layout, Top, Main, IconWrapper } from "./WindowStyle"

const Window = ({ children }) => {
  return (
    <Layout>
      <Top>
        <div></div>
        <div></div>
        <div></div>
      </Top>
      <Main>
        <div>
          <IconWrapper>
            <FcFolder />
          </IconWrapper>
          <IconWrapper>
            <FcFolder />
          </IconWrapper>
          <IconWrapper>
            <FcFolder />
          </IconWrapper>
          <IconWrapper>
            <FcGoogle />
          </IconWrapper>
        </div>
        <div>
          <IconWrapper>
            <FcSettings />
          </IconWrapper>
          <IconWrapper>
            <FcFile />
          </IconWrapper>
        </div>
      </Main>
      {children}
    </Layout>
  )
}

export default Window
