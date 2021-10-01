import React, { Component } from 'react';

import '../../styles/input.css';

export class Input extends Component {

  render() {
    return (
      <input {...this.props} />
    );
  }
}