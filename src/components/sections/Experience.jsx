import { useContext, useEffect, useState } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import { DataContext } from '../../contexts/data';

import '../../styles/section.css';

export function Experience() {
  const [edit, setEdit] = useState(true);
  const [position, setPosition] = useState('');
  const [corpName, setCorpName] = useState('');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');

  const { experience, setExperience } = useContext(DataContext);

  useEffect(() => {
    if (experience) {
      setPosition(experience.position);
      setCorpName(experience.corpName);
      setLocation(experience.location);
      setStart(experience.start);
      setFinish(experience.finish);
    }
  }, [experience]);

  function handleSubmit(e) {
    e.preventDefault();

    setEdit(false);

    setExperience({
      position,
      corpName,
      location,
      start,
      finish
    });
  }

  function handleEdit() {
    setEdit(true);
  }

  return (
    <section id='general' className='sec'>
      <h2 className='sec-title'>Experience information</h2>
      {
        edit ?
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              placeholder='Position'
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='Corporation Name'
              value={corpName}
              onChange={(e) => setCorpName(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='Location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <div>
              <Input
                type='text'
                placeholder='Start'
                value={start}
                onChange={(e) => setStart(e.target.value)}
                required
              />
              <Input
                type='text'
                placeholder='Finish'
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                required
              />
            </div>
            <Button type='submit'>Submit</Button>
          </form> :
          <div className='info'>
            <p><spam>Position:</spam> {position}</p>
            <p><spam>Corporation Name:</spam> {corpName}</p>
            <p><spam>Location:</spam> {location}</p>
            <div>
              <p><spam>Start:</spam> {start}</p>
              <p><spam>Finish:</spam> {finish}</p>
            </div>
            <Button className='edit' onClick={handleEdit}>Edit</Button>
          </div>
      }
    </section>
  );
}