import React, { Component } from 'react'
import { Header, Segment, List } from 'semantic-ui-react';

class Todo extends Component {
  render() {
    return (
      <Segment>
        <Header as='h3'>ToDo List:</Header>
          <List bulleted>
            <List.Item>Remove Register Functionality</List.Item>
            <List.Item>Remove Login Functionality</List.Item>
            <List.Item>Host on Heroku with cool URL</List.Item>
            <List.Item>Wire frame this app</List.Item>
          </List>
        </Segment>
    )
  }
}
export default Todo;