import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CATS = "list/GET_CATS"
const GET_CURRENT = "list/GET_CURRENT"

const initialState = {
  cats: [],
  current: "",
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return { ...state, cats: action.payload }
    case GET_CURRENT:
      return {
        ...state,
        current: action.payload.category,
        posts: action.payload.posts
      }
    default:
      return state
  }
}

function getCurrent(id) {
  return dispatch => {
    axios.get("/api/category/" + id).then(resp => {
      dispatch({
        type: GET_CURRENT,
        payload: {
          category: resp.data.catsName,
          posts: resp.data
        }
      })
    })
  }
}

function getCats() {
  return dispatch => {
    axios.get("/api/categories").then(resp => {
      const data = resp.data.parent
      dispatch({
        type: GET_CATS,
        payload: data
      })
    })
  }
}

export function useCats() {
  const dispatch = useDispatch()
  const cats = useSelector(appState => appState.catsState.cats)
  const getPosts = id => dispatch(getCurrent(id))
  const currentCategory = useSelector(appState => appState.catsState.current)
  const posts = useSelector(appState => appState.catsState.posts)

  useEffect(() => {
    dispatch(getCats())
  }, [dispatch])

  return { cats, getPosts, posts, currentCategory }
}
