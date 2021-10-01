import React, { Component } from 'react';

import '../../styles/button.css';

export class Button extends Component {
  render() {
    return (
      <button className='button' {...this.props}>
        {this.props.children}
      </button>
    );
  }
}