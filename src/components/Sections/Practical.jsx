import React, { Component } from 'react';

import { Form, Input, Button } from '../Form';

import '../../styles/section.css';

export class Practical extends Component {
  render() {
    return (
      <section className='section' id='practical-exp'>
        <Form>
          <Input type='text' placeholder='Company name' />
          <Input type='text' placeholder='Position title' />
          <Input type='text' placeholder='Main task' />
          <div className='start-finish'>
            <Input type='text' placeholder='Start' />
            <Input type='text' placeholder='Finish' />
          </div>
          <div className='submit-remove'>
            <Button type='submit'>Submit</Button>
            <Button className='remove'>Remove</Button>
          </div>
          <Button>Add</Button>
        </Form>
      </section>
    );
  }
}