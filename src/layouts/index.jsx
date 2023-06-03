import React from "react"
import GlobalStyle from "components/common/GlobalStyle"
import { ControlProvider } from "context/control"
import Container from "components/common/Container"
import { useEffect } from "react"

export default function Layout({ children }) {
  useEffect(() => {
    window.history.pushState(null, null, window.location.origin)
  })
  return (
    <ControlProvider>
      <GlobalStyle />
      <Container>{children}</Container>
    </ControlProvider>
  )
}
