import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Fred Oliveira</h2>
        <p><a href="mailto:fred.santos.oliveira@gmail.com">fred.santos.oliveira@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Fred. I&apos;m good at programming and teaching.
        I&apos;m a <a href="https://ufla.br/">Computer Science</a> graduate, Lavras - MG - Brazil, and
        I&apos;m a professor at <a href="https://www.ufmt.br/">UFMT</a>, V&aacute;rzea Grande - MT - Brazil. Now, I am a Ph.D researcher at <a href="https://ufg.br/">Artificial Inteligence</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
