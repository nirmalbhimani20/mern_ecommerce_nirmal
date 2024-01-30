/**
 *
 * scrollToTop.js
 * scroll restoration
 */

import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

export class scrollToTop extends Component {
  componentDidMount(prevProps) {
    if (
      prevProps &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(scrollToTop);
