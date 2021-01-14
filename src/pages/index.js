import React from "react"
import { Link } from "gatsby"

import Container from "../components/container"
import Header from "../components/header"

export default function Home() {
  return (
    <Container>
      <Link to="/contact/">Contact</Link>
      <br />
      <Link to="/about/">About</Link>
      <Header headerText="Hello Gatsby" />
      <p> Let's rock on </p>
    </Container>
  )
}
