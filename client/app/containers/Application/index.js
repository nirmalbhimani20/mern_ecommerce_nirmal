import React, { Component } from 'react';
import Notification from '../Notification';
import Navigation from '../Navigation';

export class Application extends Component {
  render() {
    return (
      <div className='application'>
        <Notification />
        <Navigation />
      </div>
    );
  }
}

export default Application;
