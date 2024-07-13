/**
 *
 * Application
 *
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Notification from '../Notification';
import Navigation from '../Navigation';

import Footer from '../../components/Common/Footer';
import Page404 from '../../components/Common/Page404';

// routes
import HomePage from '../Homepage';
import Login from '../Login';
import Signup from '../Signup';
import Contact from '../Contact';
import Sell from '../Sell';
import Dashboard from '../Dashboard';
import Authentication from '../Authentication';
import BrandsPage from '../BrandsPage';
import Shop from '../Shop';

export class Application extends Component {
  render() {
    return (
      <div className='application'>
        <Notification />
        <Navigation />
        <main className='main'>
          <Container>
            <div className='wrapper'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Signup} />
                <Route path='/contact' component={Contact} />
                <Route path='/sell' component={Sell} />
                <Route path='/brands' component={BrandsPage} />
                <Route path='/shop' component={Shop} />
                <Route
                  path='/dashboard'
                  component={Authentication(Dashboard)}
                />

                <Route path='/404' component={Page404} />
                <Route path='*' component={Page404} />
              </Switch>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Application;
