import React, { Component } from 'react';

import { General, Educational, Practical } from '../components/Sections';

export class Edit extends Component {
  render() {
    return (
      <div id='edit'>
        <General />
        <Educational />
        <Practical />
      </div>
    );
  }
}