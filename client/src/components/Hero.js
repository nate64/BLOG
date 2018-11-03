import React from 'react';
import styled from 'styled-components';

class Hero extends React.Component {
  render() {
    return (
      <StyledImage
        src={this.props.imgSrc}
        alt={this.props.imgSrc}
      >
        <StyledText>{this.props.text}</StyledText>
      </StyledImage>
    );
  };
};

const StyledImage = styled.div`
  width: 100%;
  height: 500px;
  background: ${ props => `url(${props.src})` };
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const StyledText = styled.p`
  font-family: 'Balthazar', serif;
  font-size: 75px !important;
  color: black;
`

export default Hero;
