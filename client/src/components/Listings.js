import React, { useEffect } from "react"
import { useCats } from "../hooks"
import { Link } from "react-router-dom"
import moment from "moment"

export default props => {
  const { posts, getPosts, currentCategory } = useCats()

  useEffect(() => {
    getPosts(props.match.params.id)
  }, [props.match.params])

  return (
    <div>
      <h1>{currentCategory}</h1>
    </div>
  )
}

//return <h1>{props.match.params.id}</h1>

// {posts.map(p => (
//         <div>
//           <Link to={`/postings/${p.id}`}>
//             {p.name} - {moment.fromNow(p.time.created)}
//           </Link>
//         </div>
//       ))}
