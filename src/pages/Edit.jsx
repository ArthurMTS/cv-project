import React, { Component } from 'react';

import { General, Educational, Practical } from '../components/Sections';

export class Edit extends Component {
  render() {
    return (
      <div id='edit'>
        <General handler={this.props.handleGeneral} general={this.props.general} />
        <Educational handler={this.props.handleEducational} educational={this.props.educational} />
        <Practical handler={this.props.handlePractical} practical={this.props.practical} />
      </div>
    );
  }
}