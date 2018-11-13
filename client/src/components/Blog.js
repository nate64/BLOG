import React from 'react'
import { Card, Header, Container, Segment } from 'semantic-ui-react';
import axios from 'axios';

class Blog extends React.Component {
  state = { getBlogs: [] }

  componentDidMount() {
    axios.get('/api/blogs')
    .then( res => { this.setState({ getBlogs: res.data })
    })
  }

  displayBlogs = () => {
    return this.state.getBlogs.map( b => {
      return (
        <Card key={b.id}>
          <Card.Header>
            {b.title}
          </Card.Header>
          <Card.Meta>
            {b.author}
          </Card.Meta>
          <Card.Content>
            {b.body}
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Segment basic>
            <Card.Group itemsPerRow={1}>
              {this.displayBlogs()}
            </Card.Group>
          </Segment>
        </Container>
      </div>
    )
  }
}
export default Blog;