
import './style.css';
import k from './images/John-Doe.jpg';

function AboutMe() {
  return (
    <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src={k} alt="jhon-doe" />
    </section>
  );
}

export default AboutMe;
