import React from "react"
import { useCats } from "../hooks"
import "../styles/Maincat.css"

export default props => {
  const { cats } = useCats()

  return (
    <div className="parent">
      {cats.map(parent => (
        <div className="child">
          <h1 key={`parent-${parent.id}`}>{parent.name}</h1>
          {parent.child.map(subcat => (
            <p>{subcat.name}</p>
          ))}
        </div>
      ))}
    </div>
  )
}
