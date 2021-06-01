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
      <p>Hi, my name is Fred. I&apos;m a hardworking programmer and I try to be a good teacher.
        I have a bachelor&apos;s and master&apos;s degree in computer science at <a href="http://www.dcc.ufla.br/">UFLA</a>.
        I&apos;m a professor at <a href="https://www.ufmt.br/">UFMT</a>. I&apos;m also a Ph.D student at <a href="https://ufg.br/">UFG </a>
        where I research artificial intelligence applied to speech.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Fred Oliveira <Link to="/">freds0.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
