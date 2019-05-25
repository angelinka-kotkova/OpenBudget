import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import MainPage from './components/MainPage/MainPage';
import Income from './components/Income/Income';
import Expenditures from './components/Expenditures/Expenditures';
import './styles/styles.scss';
render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/income" component={Income}/>
        <Route path="/expenditures" component={Expenditures}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
