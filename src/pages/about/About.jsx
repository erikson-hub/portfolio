import React from 'react';
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='animate-slide-down my-4 md:my-2'>
        <p className='text-black dark:text-white  font-GraphikLight md:text-xl text-center'>
          Hello! I'm
        </p>
        <h2 className='text-center text-[#FF6E30] font-GraphikMediumItalic  text-5xl md:text-8xl capitalize'>
          erikson velasquez
        </h2>
      </div>

      <p className='animate-slide-up font-GraphikLight text-center text-base md:text-xl text-black dark:text-white'>
        Frontend web developer with a focus on user experience and minimalist
        design. I specialize in building modern, responsive and optimized
        interfaces for a great user experience. I like to implement clean,
        minimalist designs with great attention to detail.
      </p>
    </div>
  );
};

export default About;
