import React from "react"
import { useCats } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Maincat from "./Maincat"
import Listings from "./Listings"
import "../styles/Maincat.css"

export default props => {
  const { cats } = useCats()
  console.log(cats)

  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Maincat} />
        <Route path="/listings/:id" component={Listings} />
      </div>
    </Router>
  )
}
