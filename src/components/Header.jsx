import React, { Component } from 'react';

import '../styles/header.css';

export class Header extends Component {
  render() {
    return (
      <header id='header'>
        <h1 id='title'>CV Creator</h1>
        <nav id='nav'>
          <button className='button'>Edit mode</button>
          <button className='button'>Preview mode</button>
        </nav>
      </header>
    );
  }
}