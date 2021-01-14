import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
      <Header headerText="Hello Gatsby" />
      <p> Let's rock on </p>
    </div>
  )
}
