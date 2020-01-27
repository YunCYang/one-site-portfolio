import React from 'react';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const roles = ['Full-Stack Developer', 'Web Designer', 'Tech Enthusiast', 'Creative Coder'];

  const interactiveRole = () => {
    return (
      <span onMouseOver={
        () => {
          if (index !== roles.length - 1) setIndex(index + 1);
          else setIndex(0);
        }
      }>{roles[index]}</span>
    );
  }

  return (
    <section id='home'>
      <div>
        <span>Hi, I'm Yun, a </span>
        {interactiveRole()}
        <p>I love to create applications using new technology</p>
        <p>Check out some of my favourite projects!</p>
      </div>
    </section>
  );
}

export default Home;
