import React from 'react';

const WorkItem = props => {
  const [hover, setHover] = React.useState(false);

  const renderTags = () => {
    if (props.item.tech.length) {
      return props.item.tech.map(tag => <div><span>{tag}</span></div>);
    } else return null;
  };

  const displayWorkItem = () => {
    if (!hover) {
      return (
        <div className='name-tag'>
          <div className="name">
            <span>{props.item.name}</span>
          </div>
          <div className="tag">
            {renderTags()}
          </div>
        </div>
      );
    } else {
      return (
        <div className='desc-link'>
          <div className="desc">
            <span>{props.item.description}</span>
          </div>
          <div className="link">
            <div>
              <a href={props.item.github} target='_blank'>GitHub</a>
            </div>
            <div>
              <a href={props.item.live} target='_blank'>Live</a>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderBackgroundStyle = () => {
    if (!hover) {
      return { 'background-image': `url(${props.item.image})` };
    } else {
      return {
        'background-image': `url(${props.item.image})`,
        'background-color': 'rgba(255, 255, 255, 0.8)',
        'background-blend-mode': 'lighten'
      };
    }
  };

  return (
    <div className={!hover ? 'item' : 'item hover'} onMouseEnter={
      () => setHover(true)
    } onMouseLeave={
      () => setHover(false)
    } style={renderBackgroundStyle()}>
      {displayWorkItem()}
    </div>
  );
}

export default WorkItem;
