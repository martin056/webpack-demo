import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation">
        <nav className="main-navigation">
          <NavLink to='/hello' activeClassName="active">Hello</NavLink>
          <NavLink to='/test-router' activeClassName="active">Test Router</NavLink>
        </nav>
      </div>
    )
  }
}

export default Navigation;
