import { Container, Form, Label } from 'semantic-ui-react'

import React from 'react'
import axios from 'axios'

class NewBlog extends React.Component {
  state = { title: '', author: '', body: '', blogs: [] }

handleSubmit = e => {
  e.preventDefault()
  const { title, author, body, blogs } = this.state
  axios.post('/api/blogs', { title, author, body })
    .then ( ({ data }) => {
      this.setState({ blogs: [data, ...blogs], title: '', author: '', body: '' })
    }
    )
}


render() {
  return (
    <Container>

      <Form.Field>
        <Label>Title</Label>
        <Form.Input
          required
          />
      </Form.Field>
      
      <Form.Field>
        <Label>Author</Label>
        <Form.Input
          required
          />
      </Form.Field>

      <Form.Field>
        <Label>Blog Entry</Label>
        <Form.TextArea
          required
          />
      </Form.Field>
      
    </Container>
  )
}


}

export default NewBlog