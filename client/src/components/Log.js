import React, { Component } from 'react'
import { Header, Segment, List } from 'semantic-ui-react';

class Log extends Component {
  render() {
    return (
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
            <List.Item>3 November: Added 'Todo' and 'Log' routes, moved content to those pages.</List.Item>
            <List.Item>7 November: Adjusted hero image, still need a way to get 2 lines of text over image.</List.Item>
          </List>
      </Segment>
    )
  }
}
export default Log;