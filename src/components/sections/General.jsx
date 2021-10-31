import { useState, useContext, useEffect } from 'react';

import { Input } from "../Input";
import { Button } from "../Button";

import { DataContext } from '../../contexts/data';

import editSvg from '../../assets/edit.svg';

export function General() {
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState('');
  const [career, setCareer] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profile, setProfile] = useState('');

  const { general, setGeneral } = useContext(DataContext);

  useEffect(() => {
    if (general) {
      setName(general.name);
      setCareer(general.career);
      setEmail(general.email);
      setPhone(general.phone);
      setProfile(general.profile);
      setEdit(false);
    }
  }, [general]);

  function handleSubmit(e) {
    e.preventDefault();

    setEdit(false);

    setGeneral({
      name,
      career,
      email,
      phone,
      profile
    });
  }

  function handleEdit() {
    setEdit(true);
  }

  return (
    <section id='general' className='sec'>
      <h2 className='sec-title'>General information</h2>
      {
        edit ? 
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='Career'
              value={career}
              onChange={(e) => setCareer(e.target.value)}
              required
            />
            <Input
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              name='profile'
              cols='30'
              rows='6'
              placeholder='Profile'
              required
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            ></textarea>
            <Button type='submit'>Submit</Button>
          </form> :
          <div className='info'>
            <strong>{name}</strong>
            <p><span>Career:</span> {career}</p>
            <p><span>E-mail:</span> {email}</p>
            <p><span>Phone:</span> {phone}</p>
            <p className='profile'><span>Profile:</span> {profile}</p>
            <Button className='edit' onClick={handleEdit}>
              <img src={editSvg} alt='edit icon' />
            </Button>
          </div>
      }
    </section>
  );
}