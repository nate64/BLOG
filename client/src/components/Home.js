import React, { Component } from 'react';
import { Header, Segment, List, Grid, Image } from 'semantic-ui-react';
import { Container } from '../styles/shared'
import front_page from '../images/front_page.jpg';
import Hero from './Hero';
import styled from 'styled-components';

import StyledText from './Hero'
import StyledImage from '../styles/shared'

class Home extends Component {
  render() {
    return (
      <PageContainer>
        <HeroContainer>

          <Segment basic>
            <HeaderText>Nate Estes</HeaderText>
          </Segment>
          
          <Segment basic>
            <SubHeader>My Journey Learning React</SubHeader>
          </Segment>
        
        </HeroContainer>
        
        <Segment basic>
          This is a segment.
          My plan is to host this on Heroku and improve it a little each week.
          As I improve it I will explain what I did and teach it to others.
        </Segment>
        
        </PageContainer>

       
        
      
    );
  }
}

const PageContainer = styled.div`

`

const HeroContainer = styled.div`
  background-image: url(${front_page});
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 50px;
`

const HeaderText = styled.h1`
  text-align: center;
  font-family: 'CopperPlate';
  font-size: 150px;
  color: white;
`

const SubHeader = styled.h2`
text-align: center;
font-family: 'CopperPlate';
font-size: 100px;
color: white;
`

export default Home;
