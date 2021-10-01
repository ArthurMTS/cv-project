import React, { Component } from 'react';

import { Button } from './Form';

import '../styles/header.css';

export class Header extends Component {
  render() {
    return (
      <header id='header'>
        <h1 id='title'>CV Creator</h1>
        <nav id='nav'>
          <Button className='blocked'>Edit mode</Button>
          <Button>Preview mode</Button>
        </nav>
      </header>
    );
  }
}