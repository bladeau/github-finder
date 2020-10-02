import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

import Alert from './components/layout/Alert';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/users/User';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/github-finder' component={Home} />
                <Route exact path='/github-finder/about' component={About} />
                <Route
                  exact
                  path='/github-finder/user/:login'
                  component={User}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
