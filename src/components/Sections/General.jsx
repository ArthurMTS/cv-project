import React, { Component } from 'react';

import { Form, Input, Button } from '../Form';

import '../../styles/section.css';

export class General extends Component {
  render() {
    return (
      <section className='section' id='general-info'>
        <Form>
          <Input type='text' placeholder='Full name' />
          <Input type='email' placeholder='E-mail' />
          <Input type='text' placeholder='Phone number' />
          <Button type='submit'>Submit</Button>
        </Form>
      </section>
    );
  }
}