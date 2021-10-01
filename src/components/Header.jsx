import React, { Component } from 'react';

import { Button } from './FormElements';

import '../styles/header.css';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(event) {
    if (!event.target.classList.contains('blocked'))
      this.props.changePage();
  }

  render() {
    return (
      <header id='header'>
        <h1 id='title'>CV Creator</h1>
        <nav id='nav'>
          <Button 
            className={this.props.edit ? 'blocked' : ''}
            onClick={this.handleSwitch}
          >
            Edit mode
          </Button>
          <Button 
            className={!this.props.edit ? 'blocked' : ''} 
            onClick={this.handleSwitch}
          >
            Preview mode
          </Button>
        </nav>
      </header>
    );
  }
}