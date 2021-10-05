import React, { Component } from 'react';

import { Input, Button } from '../FormElements';

import edit from '../../assets/edit.svg';

import '../../styles/section.css';

export class Educational extends Component {
  constructor(props) {
    super(props);

    const { institution, title, start, finish } = this.props.educational;

    this.state = {
      institution,
      title,
      start,
      finish,
      edit: !(institution && title && start && finish)
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

    console.log(this.state);
    this.setState({ edit: false });

    const { institution, title, start, finish } = this.state;
    this.props.handler(institution, title, start, finish);
  }

  render() {
    return (
      <section className='section' id='educational-exp'>
        {
          this.state.edit ?
            <form onSubmit={this.handleSubmit}>
              <Input 
                name='institution' 
                type='text' 
                placeholder='Institution Name'
                onChange={this.handleChange}
                value={this.state.institution}
              />
              <Input 
                name='title' 
                type='text' 
                placeholder='Title'
                onChange={this.handleChange}
                value={this.state.title}
              />
              <div className='start-finish'>
                <Input 
                  name='start' 
                  type='text' 
                  placeholder='Start'
                  onChange={this.handleChange}
                  value={this.state.start}
                />
                <Input
                  name='finish'
                  type='text'
                  placeholder='Finish'
                  onChange={this.handleChange}
                  value={this.state.finish}
                />
              </div>
              <Button type='submit'>Submit</Button>
            </form> :
            <div className='info'>
              <div className="data">
                <p><strong>Institution:</strong> {this.state.institution}</p>
                <p><strong>Title:</strong> {this.state.title}</p>
                <p><strong>Start:</strong> {this.state.start}</p>
                <p><strong>Finish:</strong> {this.state.finish}</p>
              </div>
              <Button onClick={this.handleEdit}><img src={edit} alt='Edit Icon' /></Button>
            </div>
        }
      </section>
    );
  }
}