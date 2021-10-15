import '../styles/preview.css';

export function Preview() {
  return (
    <main id='preview'>
      <header>
        <section id='general'>
          <h2 id='name'>Arthur Matheus da Silva</h2>
          <p id='career'>Front-end Developer</p>
        </section>
        <section id='contact'>
          <p id='email'>arthur@mail.com</p>
          <p id='phone'>(xx) xxxx-xxxx</p>
        </section>
      </header>
      <div className='info-box'>
        <aside id='education'>
          <h3>Education</h3>
          <div className='degree'>
            <strong>Degree</strong>
            <p>University, Location</p>
            <p>Start - Finish</p>
          </div>
        </aside>
        <section id='profile'>
          <h3>Profile</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere egestas nisl, viverra venenatis massa suscipit a. Sed accumsan bibendum massa id consectetur. Nam euismod at felis sed imperdiet. Proin porttitor mollis lectus, non scelerisque nisi volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium bibendum ante at maximus. In dapibus ipsum eu magna sodales luctus. Suspendisse facilisis erat nibh, vel vulputate mi molestie eu.</p>
        </section>
      </div>
      <div className='info-box'>
        <aside id='expertise'>
          <h3>Expertise</h3>
          <h4>Professional Skills</h4>
          <ul>
            <li>React</li>
            <li>Leadership</li>
            <li>Creativity</li>
          </ul>
        </aside>
        <section id='experience'>
          <h3>Experience</h3>
          <div className='experience'>
            <strong>Position</strong>
            <p>Corporation Name / Location / Start - Finish</p>
          </div>
        </section>
      </div>
    </main>
  );
}