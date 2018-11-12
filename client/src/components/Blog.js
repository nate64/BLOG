import React from 'react'
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

class Blog extends React.Component {
  state = { getBlogs: [] }

  componentDidMount() {
    axios.get('/blog')
    .then( res => this.setState({ getBlogs: res.data })
    )
  }

  displayBlogs = () => {
    return this.state.getBlogs.map( b => {
      return (
        <Card key={b.id}>
          {b.title}
          {b.author}
          {b.body}
        </Card>
      )
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Card.Group>
            {this.displayBlogs()}
          </Card.Group>
        </Container>
      </div>
    )
  }
}
export default Blog;