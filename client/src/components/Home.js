import React, { Component } from 'react';
import { Header, Segment, List, Grid, Image } from 'semantic-ui-react';
import { Container } from '../styles/shared'
import front_page from '../images/front_page.jpg';
import Hero from './Hero';
import StyledText from './Hero'

import StyledImage from '../styles/shared'

class Home extends Component {
  render() {
    return (
      <Container>
          <Hero imgSrc={front_page} text="Nate Estes" />
      <Container>
          <Header as='h1' textAlign='center'>My Journey Learning React</Header>
            {/* would like to put this on a second line over main hero image */}
      </Container>

        <Segment>
          This is a segment.
          My plan is to host this on Heroku and improve it a little each week.
          As I improve it I will explain what I did and teach it to others.
        </Segment>
        

        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              
            </Grid.Column>

            <Grid.Column>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      
      </Container>
    );
  }
}

export default Home;
