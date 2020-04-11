import React from 'react';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header>
        <h1 className="header-text">Giphy Image Explorer</h1>
      </header>
    );
  }
}

export default Header;
