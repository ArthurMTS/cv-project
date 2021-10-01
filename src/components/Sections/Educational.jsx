import React, { Component } from 'react';

import { Input, Button } from '../FormElements';

import '../../styles/section.css';

export class Educational extends Component {
  render() {
    return (
      <section className='section' id='practical-exp'>
        <form>
          <Input type='text' placeholder='Institution Name' />
          <Input type='text' placeholder='Title' />
          <div className='start-finish'>
            <Input type='text' placeholder='Start' />
            <Input type='text' placeholder='Finish' />
          </div>
          <div className='submit-remove'>
            <Button type='submit'>Submit</Button>
            <Button className='remove'>Remove</Button>
          </div>
          <Button>Add</Button>
        </form>
      </section>
    );
  }
}