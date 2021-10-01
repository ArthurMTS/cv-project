import React, { Component } from 'react';

import { Input } from './Input';
import { Button } from './Button';

import '../../styles/form.css';

class Form extends Component {

  render() {
    return (
      <form onSubmit={this.props.submit} {...this.props}>
        {this.props.children}
      </form>
    );
  }
}

export { Form, Input, Button };