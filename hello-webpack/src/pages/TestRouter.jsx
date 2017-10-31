import React from 'react';

import './styles.scss'

class TestRouter extends React.Component {
  render() {
    return (
      <div className="test-router">
        <div className="test-router-header">
          You are on a different route!
        </div>
        <div className="test-router-text">
          Have you noticed the elements have styles?
        </div>
      </div>
    )
  }
}

export default TestRouter;