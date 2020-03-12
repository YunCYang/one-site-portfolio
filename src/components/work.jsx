import React from 'react';
import WorkItem from './workItem';
import workList from '../data/workList';

const Work = () => {
  const renderWorkItem = () => {
    return workList.map(item => <WorkItem item={item} />);
  };

  return (
    <section id='work'>
      <div className='container'>
        {renderWorkItem()}
      </div>
    </section>
  );
}

export default Work;
