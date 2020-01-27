import React from 'react';

const About = () => {
  return (
    <section id='about'>
      <div className='about-content'>
        <div className='container profile'>
          <h1>About Me</h1>
          <p>
            I'm a full-stack web developer who love to learn and experiment
            with new technologies. I started my journey using jQery and HTML/CSS.
            My current focus is on application development with ReactJs and NodeJs.
          </p>
          <p>
            While not working, I can often be found rock climbing in the wild
            or at the gyms.
          </p>
        </div>
        <div className='container skill'>
          <h3>Skills</h3>
          <div className='skill-content'>
            <div>
              <h4>Client</h4>
              <ul>
                <li>Javascript ES6+</li>
                <li>ReactJs</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap 4</li>
                <li>jQery</li>
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
                <li>AWS</li>
                <li>Weboack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
