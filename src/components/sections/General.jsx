import { useState } from 'react';

import { Input } from "../Input";
import { Button } from "../Button";

import '../../styles/section.css';

export function General({ handler }) {
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState('');
  const [career, setCareer] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profile, setProfile] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setEdit(false);

    handler({
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
            <p><spam>Career:</spam> {career}</p>
            <p><spam>E-mail:</spam> {email}</p>
            <p><spam>Phone:</spam> {phone}</p>
            <p className='profile'><spam>Profile:</spam> {profile}</p>
            <Button className='edit' onClick={handleEdit}>Edit</Button>
          </div>
      }
    </section>
  );
}