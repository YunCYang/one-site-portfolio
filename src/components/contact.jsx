import React from 'react';

const Contact = () => {
  const [link, setLink] = React.useState('');
  const createDesc = info => {
    if (link === info) {
      if (link === 'mail') {
        return (
          <a href="mailto:ericeorl2013@gmail.com">
            <span>ericeorl2013@gmail.com</span>
          </a>
        );
      } else if (link === 'github') {
        return (
          <a href="http://github.com/YunCYang" target="_blank">
            <span>yuncyang</span>
          </a>
        );
      } else if (link === 'linkedin') {
        return (
          <a href="http://linkedin.com/in/yun-c-yang" target="_blank">
            <span>yun-c-yang</span>
          </a>
        );
      }
    } else return <></>;
  }

  return (
    <section id='contact'>
      <div className='top-divider'></div>
      <div className='container'>
        <div>
          <div className='info' onMouseEnter={
            () => setLink('mail')
          } onMouseLeave={
            () => setLink('')
          }>
            <a href="mailto:ericeorl2013@gmail.com">
              <i class="fas fa-envelope"></i>
            </a>
            {createDesc('mail')}
          </div>
          <div className='info' onMouseEnter={
            () => setLink('github')
          } onMouseLeave={
            () => setLink('')
          }>
            <a href="http://github.com/YunCYang" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
            {createDesc('github')}
          </div>
          <div className='info' onMouseEnter={
            () => setLink('linkedin')
          } onMouseLeave={
            () => setLink('')
          }>
            <a href="http://linkedin.com/in/yun-c-yang" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            {createDesc('linkedin')}
          </div>
        </div>
      </div>
      <div className='bot-divider'></div>
    </section>
  );
}

export default Contact;
