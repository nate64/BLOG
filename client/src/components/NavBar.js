import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Menu.Item name='This app built with create-repack-app by Dave Jungst' />
        {/* <Link to='/register'>
          <Menu.Item name='Register' />
        </Link> */}
        {/* <Link to='/login'>
          <Menu.Item name='Login' />
        </Link> */}
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/Blog'>
            <Menu.Item name='Blog' />
          </Link>
          <Link to='/About'>
            <Menu.Item name='about' />
          </Link>
          <Link to='/Log'>
            <Menu.Item name='Log' />
          </Link>
          <Link to='/Todo'>
            <Menu.Item name='To-Do List'/>
          </Link>

          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
