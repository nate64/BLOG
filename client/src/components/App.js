import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Log from './Log'
import Flash from './Flash';
import Home from './Home';
import About from './About'
import FetchUser from './FetchUser';
import Todo from './Todo'
import Blog from './Blog'
import NewBlog from './NewBlog'

import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Log' component={Log} />
            <Route exact path='/Blog' component={Blog} />
            <Route exact path='/Blog/New' component={NewBlog} />
            <Route exact path='/Todo' component={Todo} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
