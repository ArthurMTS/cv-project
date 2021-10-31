import { useContext, useState, useEffect } from 'react';

import { Input } from "../Input";
import { Button } from "../Button";

import { DataContext } from '../../contexts/data';

import editSvg from '../../assets/edit.svg';

export function Expertise() {
  const [edit, setEdit] = useState(true);
  const [skillOne, setSkillOne] = useState('');
  const [skillTwo, setSkillTwo] = useState('');
  const [skillThree, setSkillThree] = useState('');
  const [skillFour, setSkillFour] = useState('');
  const [skillFive, setSkillFive] = useState('');

  const { expertise, setExpertise } = useContext(DataContext);

  useEffect(() => {
    if (expertise) {
      setSkillOne(expertise.skillOne);
      setSkillTwo(expertise.skillTwo);
      setSkillThree(expertise.skillThree);
      setSkillFour(expertise.skillFour);
      setSkillFive(expertise.skillFive);
      setEdit(false);
    }
  }, [expertise])
  
  function handleSubmit(e) {
    e.preventDefault();

    setEdit(false);

    setExpertise({
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
    <section id='expertise' className='sec'>
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
            <Button className='edit' onClick={handleEdit}>
              <img src={editSvg} alt='edit icon' />
            </Button>
          </div>
      }
    </section>
  );
}