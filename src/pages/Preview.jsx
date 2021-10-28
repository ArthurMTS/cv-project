import { useContext } from 'react';

import { DataContext } from '../contexts/data';

import '../styles/preview.css';

export function Preview() {
  const { general, education, experience, expertise } = useContext(DataContext);

  return (
    <main id='preview'>
      <header>
        <section id='general'>
          <h2 id='name'>{general.name}</h2>
          <p id='career'>{general.career}</p>
        </section>
        <section id='contact'>
          <p id='email'>{general.email}</p>
          <p id='phone'>{general.phone}</p>
        </section>
      </header>
      <div className='info-box'>
        <aside id='education'>
          <h3>Education</h3>
          <div className='degree'>
            <strong>{education.degree}</strong>
            <p>{education.university}, {education.location}</p>
            <p>{education.start} - {education.finish}</p>
          </div>
        </aside>
        <section id='profile'>
          <h3>Profile</h3>
          <p>{general.profile}</p>
        </section>
      </div>
      <div className='info-box'>
        <aside id='expertise'>
          <h3>Expertise</h3>
          <h4>Professional Skills</h4>
          <ul>
            <li>{expertise.skillOne}</li>
            <li>{expertise.skillTwo}</li>
            <li>{expertise.skillThree}</li>
            <li>{expertise.skillFour}</li>
            <li>{expertise.skillFive}</li>
          </ul>
        </aside>
        <section id='experience'>
          <h3>Experience</h3>
          <div className='experience'>
            <strong>{experience.position}</strong>
            <p>{experience.corpName} / {experience.location} / {experience.start} - {experience.finish}</p>
          </div>
        </section>
      </div>
    </main>
  );
}