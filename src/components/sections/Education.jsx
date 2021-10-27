import { useState } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import '../../styles/section.css';

export function Education({ handler }) {
  const [edit, setEdit] = useState(true);
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setEdit(false);
    
    handler({
      degree,
      university,
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
      <h2 className='sec-title'>Educational information</h2>
      {
        edit ?
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              placeholder='Degree'
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='University'
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
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
            <p><spam>Degree:</spam> {degree}</p>
            <p><spam>University:</spam> {university}</p>
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