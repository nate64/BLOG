import React, { Component } from 'react';
import { Header, Segment, List, Grid, Image } from 'semantic-ui-react';
import { Container } from '../styles/shared'

class Home extends Component {
  render() {
    return (
      
        <Container>

        <Container fluid>
          <Image src='/images/front_page.jpg' fluid size='large' alt='nature'/>
          <Header as='h1' textAlign='center'>Nate's Journey</Header>
          <Header as='h2' textAlign='center'>Learning React</Header>
        </Container>

        <Segment>
          This is a segment.
          My plan is to host this on Heroku and improve it a little each week.
          As I improve it I will explain what I did and teach it to others.
        </Segment>
        

        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment>
                <Header as='h3'>ToDo List:</Header>
                <List bulleted>
                  <List.Item>Remove Register Functionality</List.Item>
                  <List.Item>Remove Login Functionality</List.Item>
                  <List.Item>Host on Heroku with cool URL</List.Item>
                  <List.Item>Wire frame this app</List.Item>
                </List>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Header as='h3'>Log:</Header>
                <List bulleted>
                  <List.Item>13 October:  Created the app and added the content you see here.</List.Item>
                  <List.Item>14 October:  TIRL (Today I Re-Learned) that you can use arrow functions to auto-bind.</List.Item>
                  <List.Item>14 October:  Playing with 'grid' - a semantic react component.  Needs more tweaking to look good.</List.Item>
                  <List.Item>--> Looks better now.  HINT: follow the docs to get the results you want</List.Item>
                  <List.Item>17 October: Deployed to Heroku at: https://wunder-awesome-react-journey.herokuapp.com/</List.Item>
                  <List.Item>This required fixing the package.json file and fixing a devise error in /config/intitializers/devise.rb</List.Item>
                  <List.Item>25 October: Setup framework for app wide styled components /styles/shared.js</List.Item>
                </List>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        </Container>
    

    );
  }
}

export default Home;
