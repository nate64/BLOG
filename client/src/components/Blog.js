import React, { Component } from 'react'
import { Header, Segment, List, Image } from 'semantic-ui-react';
import axios from 'axios';
import { getBlogs } from '../reducers/blogs'

class Blog extends React.Component {
  state = { getBlogs: [] }

  componentDidMount() {
    axios.get('/pages')
    .then( res => this.setState({ getBlogs: res.data })
    )
  }

  displayBlogs() {

  }

  render() {
    return (
      <>
        <h1>This is the Blog Page</h1>
        
      </>
    )
  }
}
export default Blog;