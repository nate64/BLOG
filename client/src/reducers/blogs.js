import axios from 'axios'

const BLOGS = 'BLOGS';

export const getBlogs = () => {
  return(dispatch) => {
    axios.get(url here)
    .then( res => {
      dispatch({ type: BLOGS, blogs: res.data })
    })
  }
}

**add reducer Here....