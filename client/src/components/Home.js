import React, { Component } from 'react';
import { Header, Segment, List } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Nate's Journey</Header>
        <Header as='h2' textAlign='center'>Learning React</Header>
        
        <Segment>
          This is a segment.
          My plan is to host this on Heroku and improve it a little each week.
          As I improve it I will explain what I did and teach it to others.
        </Segment>
        <Segment>
          <Header as='h3'>ToDo List:</Header>
          <List bulleted>
            <List.Item>Remove Register Functionality</List.Item>
            <List.Item>Remove Login Functionality</List.Item>
            <List.Item>Host on Heroku with cool URL</List.Item>
          </List>
        </Segment>

        <Segment>
        <Header as='h3'>Log:</Header>
          <List bulleted>
            <List.Item>13 October:  Created the app and added the content you see here.</List.Item>
          </List>
        </Segment>


      </div>

    );
  }
}

export default Home;
