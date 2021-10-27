import { useState } from 'react';

import { Input } from "../Input";
import { Button } from "../Button";

import '../../styles/section.css';

export function Expertise({ handler }) {
  const [edit, setEdit] = useState(true);
  const [skillOne, setSkillOne] = useState('');
  const [skillTwo, setSkillTwo] = useState('');
  const [skillThree, setSkillThree] = useState('');
  const [skillFour, setSkillFour] = useState('');
  const [skillFive, setSkillFive] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();

    setEdit(false);

    handler({
      skillOne,
      skillTwo,
      skillThree,
      skillFour,
      skillFive
    });
  }

  function handleEdit() {
    setEdit(true);
  }

  return (
    <section id='general' className='sec'>
      <h2 className='sec-title'>Expertise</h2>
      {
        edit ?
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              placeholder='Skill'
              value={skillOne}
              onChange={(e) => setSkillOne(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='Skill'
              value={skillTwo}
              onChange={(e) => setSkillTwo(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='Skill'
              value={skillThree}
              onChange={(e) => setSkillThree(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='Skill'
              value={skillFour}
              onChange={(e) => setSkillFour(e.target.value)}
            />
            <Input
              type='text'
              placeholder='Skill'
              value={skillFive}
              onChange={(e) => setSkillFive(e.target.value)}
            />
            <Button type='submit'>Submit</Button>
          </form> :
          <div className='info'>
            <strong>Professional Skills</strong>
            <ul>
              <li>{skillOne}</li>
              <li>{skillTwo}</li>
              <li>{skillThree}</li>
              <li>{skillFour}</li>
              <li>{skillFive}</li>
            </ul>
            <Button className='edit' onClick={handleEdit}>Edit</Button>
          </div>
      }
    </section>
  );
}