import React from "react"
import { useCats } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Maincat from "./Maincat"
import "../styles/Maincat.css"

export default props => {
  const { cats } = useCats()
  console.log(cats)

  return (
    <Router>
      <div className="wrapper">
        <div>
          <h1>ryanslist</h1>
          <br />
          <h5>create a posting</h5>
          <h5>my account</h5>
          <textarea>search ryanslist</textarea>
          <img src="screenshot.jpg" alt="calendar" />
          <br />
          <h5>help, faq, abuse, legal</h5>
          <h5>avoid scams and fraud</h5>
          <h5>personal safety tips</h5>
          <h5>terms of use</h5>
          <h5>privacy policy</h5>
          <h5>system status</h5>
          <br />
          <h5>about ryanslist</h5>
          <h5>ryanslist is hiring</h5>
          <h5>crailist open source</h5>
          <h5>ryanslist blog</h5>
          <h5>best-of-ryanslist</h5>
          <h5>ryanslist TV</h5>
          <h5>“ryanslist joe”</h5>
          <h5>ryan newmark philanthropies</h5>
        </div>
        <div className="cats">
          <Route path="/" component={Maincat} />
        </div>
      </div>
    </Router>
  )
}
