import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Maincat from "./Maincat"
import Listings from "./Listings"
import Post from "./Post"
import CreatePost from "./CreatePost"
import "../styles/Maincat.css"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Maincat} />
        <Route exact path="/Post/:id" component={Post} />
        <Route exact path="/:id/create" component={CreatePost} />
        <Route exact path="/listings/:id" component={Listings} />
      </div>
    </Router>
  )
}
