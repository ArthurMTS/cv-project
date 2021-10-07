import React, { Component } from 'react';

export class Preview extends Component {
  constructor(props) {
    super(props);

    const { general, educational, practical } = this.props;

    this.name = general.name;
    this.email = general.email;
    this.phone = general.phone;
    this.institution = educational.institution;
    this.title = educational.title;
    this.eStart = educational.start;
    this.eFinish = educational.finish;
    this.company = practical.company;
    this.position = practical.position;
    this.mainTask = practical.mainTask;
    this.pStart = practical.start;
    this.pFinish = practical.finish;
  }

  render() {
    return (
      <div id='preview'>
        <h2>{this.name}</h2>
        <div id='contacts'>
          <p>{this.email}</p>
          <p>{this.phone}</p>
        </div>
        <div id='content'>
          <div id='education'>
            <h3>Education</h3>
            <p>
              <span>
                <p>{this.eStart} - {this.eFinish}</p>
                <p>{this.title}</p>
              </span> 
              <p>{this.institution}</p>
            </p>
          </div>
          <div id='practical'>
            <h3>Experience</h3>
            <p>
              <span>
                <p>{this.pStart} - {this.pFinish}</p>
                <p>{this.position}</p>
              </span> 
              <p>
                {this.company}<br/>
                {this.mainTask}
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}