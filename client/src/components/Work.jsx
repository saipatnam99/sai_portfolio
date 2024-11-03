import React from 'react';

const Work = () => {
  const github = "https://github.com/saipatnam99"; // GitHub profile URL

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>work</p>
        <p className='text-gray-400'>Checkout some of my recent work</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <p>
          <a href={github} target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-500'>
            {github}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Work;
