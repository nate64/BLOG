import { Container, Form, Label, Button, Input } from 'semantic-ui-react'
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
      //.this.state.history.push('/Blog') //this no worky
    })
}

handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

addBlog = e => {
  return null
}

render() {
  const { title, author, body } = this.state
  return (
    <Container>
      <Form onSubmit={this.handleSubmit}>
        <Input
          required
          name='title'
          placeholder='Blog Entry Title'
          value={title}
          onChange={this.handleChange}
        />
        <Input
          required
          name='author'
          placeholder="Author's Name"
          value={author}
          onChange={this.handleChange}
        />
        <Input 
          required
          name='body'
          placeholder='Write Something Inspiring...'
          value={body}
          onChange={this.handleChange}
        />
      </Form>
      <button onClick={this.handleSubmit}>Submit</button>
    </Container>
  )
}


}

export default NewBlog