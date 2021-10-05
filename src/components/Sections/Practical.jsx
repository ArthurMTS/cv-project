import React, { Component } from 'react';

import { Input, Button } from '../FormElements';

import edit from '../../assets/edit.svg';

import '../../styles/section.css';

export class Practical extends Component {
  constructor(props) {
    super(props);

    const { company, position, mainTask, start, finish } = this.props.practical;

    this.state = {
      company,
      position,
      mainTask,
      start,
      finish,
      edit: !(company && position && mainTask && start && finish)
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

    const { company, position, mainTask, start, finish } = this.state;
    this.props.handler(company, position, mainTask, start, finish);
  }

  render() {
    return (
      <section className='section' id='practical-exp'>
        {
          this.state.edit ?
            <form onSubmit={this.handleSubmit}>
              <Input
                name='company'
                type='text'
                placeholder='Company name'
                onChange={this.handleChange}
                value={this.state.company}
              />
              <Input
                name='position'
                type='text'
                placeholder='Position title'
                onChange={this.handleChange}
                value={this.state.position}
              />
              <Input
                name='mainTask'
                type='text'
                placeholder='Main task'
                onChange={this.handleChange}
                value={this.state.mainTask}
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
                <p><strong>Company:</strong> {this.state.company}</p>
                <p><strong>Position:</strong> {this.state.position}</p>
                <p><strong>Main task:</strong> {this.state.mainTask}</p>
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