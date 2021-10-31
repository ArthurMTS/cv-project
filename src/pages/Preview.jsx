import { useContext } from 'react';

import { DataContext } from '../contexts/data';

import '../styles/preview.css';

export function Preview() {
  const { general, education, experience, expertise } = useContext(DataContext);

  return (
    <main id='preview'>
      <header>
        <section id='general'>
          <h2 id='name'>{general ? general.name : ''}</h2>
          <p id='career'>{general ? general.career : ''}</p>
        </section>
        <section id='contact'>
          <p id='email'>{general ? general.email : ''}</p>
          <p id='phone'>{general ? general.phone : ''}</p>
        </section>
      </header>
      <div className='info-box'>
        <aside id='education'>
          <h3>Education</h3>
          <div className='degree'>
            <strong>{education ? education.degree : ''}</strong>
            <p>{education ? education.university : ''}, {education ? education.location : ''}</p>
            <p>{education ? education.start : ''} - {education ? education.finish : ''}</p>
          </div>
        </aside>
        <section id='profile'>
          <h3>Profile</h3>
          <p>{general ? general.profile : ''}</p>
        </section>
      </div>
      <div className='info-box'>
        <aside id='expertise'>
          <h3>Expertise</h3>
          <h4>Professional Skills</h4>
          <ul>
            <li>{expertise ? expertise.skillOne : ''}</li>
            <li>{expertise ? expertise.skillTwo : ''}</li>
            <li>{expertise ? expertise.skillThree : ''}</li>
            <li>{expertise ? expertise.skillFour : ''}</li>
            <li>{expertise ? expertise.skillFive : ''}</li>
          </ul>
        </aside>
        <section id='experience'>
          <h3>Experience</h3>
          <div className='experience'>
            <strong>{experience ? experience.position : ''}</strong>
            <p>{experience ? experience.corpName : ''} / {experience ? experience.location : ''} / {experience ? experience.start : ''} - {experience ? experience.finish : ''}</p>
          </div>
        </section>
      </div>
    </main>
  );
}