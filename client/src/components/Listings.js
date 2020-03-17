import React, { useEffect } from "react"
import { useCats } from "../hooks"
import { Link } from "react-router-dom"
import CreatePost from "./CreatePost"
import moment from "moment"

export default props => {
  const { posts, getPosts, currentCategory } = useCats()

  useEffect(() => {
    getPosts(props.match.params.id)
  }, [props.match.params])

  return (
    <div>
      <h1>{currentCategory}</h1>
      <Link to={"/" + props.match.params.id + "/create"}>Create Post</Link>
    </div>
  )
}
