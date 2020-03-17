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
        <Route exact path="/posting/:id" component={Post} />
        <Route exact path="/:id" component={Listings} />
        <Route exact path="/:id/create" component={CreatePost} />
      </div>
    </Router>
  )
}
