import React from 'react'
import axios from 'axios';
import { Card, Container, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


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
          <Link to="/blog/new" >
            <Button>
              Write a New Blog Entry  
            </Button>
          </Link>
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