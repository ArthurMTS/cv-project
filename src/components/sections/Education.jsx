import { useContext, useEffect, useState } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import { DataContext } from '../../contexts/data';

import '../../styles/section.css';

export function Education() {
  const [edit, setEdit] = useState(true);
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');

  const { education, setEducation } = useContext(DataContext);

  useEffect(() => {
    if (education) {
      setDegree(education.degree);
      setUniversity(education.university);
      setLocation(education.location);
      setStart(education.start);
      setFinish(education.finish);
    }
  }, [education]);

  function handleSubmit(e) {
    e.preventDefault();

    setEdit(false);
    
    setEducation({
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
            <p><span>Degree:</span> {degree}</p>
            <p><span>University:</span> {university}</p>
            <p><span>Location:</span> {location}</p>
            <div>
              <p><span>Start:</span> {start}</p>
              <p><span>Finish:</span> {finish}</p>
            </div>
            <Button className='edit' onClick={handleEdit}>Edit</Button>
          </div>
      }
    </section>
  );
}