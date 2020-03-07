import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Maincat from "./Maincat"
import Listings from "./Listings"
import "../styles/Maincat.css"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Maincat} />
        <Route path="/listings/:id" component={Listings} />
      </div>
    </Router>
  )
}
