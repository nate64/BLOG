import React, { Component } from 'react'
import { Header, Segment, List, Image } from 'semantic-ui-react';
import axios from 'axios';
import { getBlogs } from '../reducers/blogs'

class Blog extends Component {
  state ?

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getBlogs())
  }

  render() {
    return (
      <>
        <h1>This is the Blog Page</h1>
        <h1>This is a test.</h1>
      </>
    )
  }
}
export default Blog;