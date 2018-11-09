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
        
        <Intro>
          Welcome to my website!  This page is designed to be a work in progress. 
          I just completed DevPoint Labs’ Web Development Boot Camp and I want to expand and improve my skills. 
          My goal is to keep my skills sharp by developing this website and posting the fundamentals of ReactJS to this Blog. 
          I look forward to you learning with me!
        </Intro>
        <Intro>
          --Nate
        </Intro>
        
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

const Intro = styled.h2`
  text-align: center;
`

export default Home;
