import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Base = styled.div`
  width: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  margin: 4px auto;
  padding: 12px 24px;
  background-color: #e5ecf2;
  border-radius: 4px;
  transition: 0.3s;
  text-align: center;

  &:hover {
    background-color: #bfe1ff;
  }
`

const Menu = ({ to, onClick = null, children }) => {
  return (
    <Link to={to} onClick={onClick}>
      <Base>{children}</Base>
    </Link>
  )
}

export default Menu
