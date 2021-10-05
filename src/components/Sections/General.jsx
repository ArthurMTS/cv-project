import React, { Component } from 'react';

import { Input, Button } from '../FormElements';

import edit from '../../assets/edit.svg';

import '../../styles/section.css';

export class General extends Component {
  constructor(props) {
    super(props);

    const { name, email, phone } = this.props.general;

    this.state = {
      name,
      email,
      phone,
      edit: !(name && email && phone)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ edit: false });

    const { name, email, phone } = this.state;
    this.props.handler(name, email, phone);
  }

  render() {
    return (
      <section className='section' id='general-info'>
        {
          this.state.edit ?
            <form onSubmit={this.handleSubmit}>
              <Input 
                name='name'
                type='text'
                placeholder='Full name'
                onChange={this.handleChange}
                value={this.state.name}  
              />
              <Input
                name='email'
                type='email'
                placeholder='E-mail'
                onChange={this.handleChange}
                value={this.state.email}  
              />
              <Input
                name='phone'
                type='text'
                placeholder='Phone number'
                onChange={this.handleChange}
                value={this.state.phone}  
              />
              <Button type='submit'>Submit</Button>
            </form> :
            <div className='info'>
              <div className="data">
                <p><strong>Name:</strong> {this.state.name}</p>
                <p><strong>E-mail:</strong> {this.state.email}</p>
                <p><strong>Phone:</strong> {this.state.phone}</p>
              </div>
              <Button onClick={this.handleEdit}><img src={edit} alt='Edit Icon' /></Button>
            </div>
        }
      </section>
    );
  }
}