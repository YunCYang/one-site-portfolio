import React from 'react';

const About = () => {
  return (
    <section id='about'>
      <div className='about-content'>
        <div className='container profile'>
          <h1>About Me</h1>
          <p>
            I'm a full-stack software engineer who loves to learn and experiment
            with new technologies. I started my journey using jQuery and HTML/CSS.
            My current focus is on ReactJs and NodeJs.
          </p>
          <p>
            While not working, I can often be found rock climbing in the wild
            or at gyms.
          </p>
          <a href="https://docs.google.com/document/d/1ADxY-7RlgksbFlrYE9TV-SwRh6Hu5gbi7Ch4BUl5aUo/edit?usp=sharing"
            target="_blank">
            <span className="resume">
              Resume
            </span>
          </a>
        </div>
        <div className='container skill'>
          <h3>Skills</h3>
          <div className='skill-content'>
            <div>
              <h4>Client</h4>
              <ul>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>React Router</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Sass</li>
                <li>Redux</li>
              </ul>
            </div>
            <div>
              <h4>Server</h4>
              <ul>
                <li>NodeJs</li>
                <li>PostgreSQL</li>
                <li>ExpressJs</li>
              </ul>
            </div>
            <div>
              <h4>Dev Tools</h4>
              <ul>
                <li>VS Code</li>
                <li>Git</li>
                <li>Jest</li>
                <li>Babel</li>
                <li>AWS</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
