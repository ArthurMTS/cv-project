import { Input } from "../Input";
import { Button } from "../Button";

import '../../styles/section.css';

export function General() {
  return (
    <section id='general' className='sec'>
      <h2 className='sec-title'>General information</h2>
      <form>
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Career' />
        <Input type='email' placeholder='E-mail' />
        <Input type='text' placeholder='Phone' />
        <textarea name='profile' cols='30' rows='6' placeholder='Profile' required></textarea>
        <Button type='submit'>Submit</Button>
      </form>
    </section>
  );
}